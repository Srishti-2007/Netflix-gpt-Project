import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constant";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user)

  const handleSignOut=()=>{
    signOut(auth)
  }
  
  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (user)=>{
            // if user is sign in or sign up , it will give information
            if(user){
                const {uid,email,displayName}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                navigate("/browse")
                
            }
            else{
                // user is signout
                dispatch(removeUser());
                navigate("/")
                
            }
        });
        // unsucribe whem component is unmount
    return ()=>unsubscribe()
      },
    []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (<div className="flex p-2 gap-2">
        <img
        className="w-12 h-12"
        alt="usericon"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"></img>
        <button
        onClick={handleSignOut}
        className="font-bold text-white "
        >(Sign Out)</button>
      </div>)}
      
    </div>
  );
};

export default Header;

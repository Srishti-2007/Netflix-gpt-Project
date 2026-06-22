import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice"
import { LOGO } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector((store)=>store.user)
  const showGptSearch=useSelector((store)=>store.gpt.showGptSearch)
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

    const handleGptSearchClick=()=>{
      // toggle gpt search
      dispatch(toggleGptSearchView());
    };
    const handlelangChange=(e)=>{
      dispatch(changeLanguage(e.target.value))
    }
  
  
  return (
    <div className="absolute w-screen px-8 py-2 
    bg-linear-to-b from-black z-50 flex justify-between
    flex-col md:flex-row">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="Netflix Logo"
      />

      {user && (<div className="flex p-2 gap-2">
       { showGptSearch && <select
        onChange={handlelangChange}
        className="p-2 my-2 bg-pink-900 text-white rounded-lg">
          <option value="en">English</option>
                    <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>

        </select>}

        <button
        className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
        onClick={handleGptSearchClick}
        >
       {showGptSearch? "Home Page" : "GPT Search"} </button>
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

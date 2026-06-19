import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector((store)=>store.user)
  const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
      // sign out successful
      navigate("/");
    })
    .catch((error)=>{
      navigate("/error");
    })
  }
  

  return (
    <div className="absolute w-screen px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
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

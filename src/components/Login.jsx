import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { BACKG_IMG } from "../utils/constant";



const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState(null);


  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  

  const handleButtonClick = (e) => {
    // check validate
    e.preventDefault();
    const message = checkValidateData(
      email.current?.value,
      password.current.value,
      name.current?.value,
      isSignInForm,
    );
    setErrorMessage(message);
    if(!message){  //if message return null then doing it
      if(!isSignInForm){
        // sign up
        createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
          const user=userCredential.user;
          updateProfile(user ,{
            displayName: name.current.value
          })
         
          .catch((error) => {        
    setErrorMessage(error.message)
  })
        })
        .catch((error)=>{
          const errrorCode=error.code;
          const errorMessage=error.message;
          setErrorMessage(errrorCode + "-" + errorMessage)
        })
      }
      else{
        // sign in
        signInWithEmailAndPassword(auth,email.current.value,password.current.value)
        .then((userCredential)=>{
          const user=userCredential.user;
         
        })
        .catch((error)=>{
          const errorCode=error.code;
          const errorMessage=error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        })
      }
    }
  };



  const toggleSignInForm = () => {
  setisSignInForm(!isSignInForm);
  setErrorMessage(null);
  if (email.current) email.current.value = "";
  if (password.current) password.current.value = "";
  if (name.current) name.current.value = "";
};
  return (
    <div className="h-screen overflow-hidden">
      {/* header portion */}
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen "
          src={BACKG_IMG}
          alt="bg"
        />
      </div>
      {/* form portion */}
      <form className="absolute left-0 right-0 mx-auto top-1/2 -translate-y-1/2 w-full max-w-md box-border bg-black/80 p-12 text-white rounded-lg">
        <h1 className="text-3xl font-bold mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <input
           autoComplete="new-password" 
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="w-full p-4 mb-4 bg-gray-700 rounded-md outline-none"
        />

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="w-full p-4 mb-4 bg-gray-700 rounded-md outline-none"
          />
        )}

        <input
         autocomplete="new-password" 
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 bg-gray-700 rounded-md outline-none"
        />

        {errorMessage && (
          <p className="text-red-500 text-sm font-semibold mb-4 break-words leading-snug">
            {errorMessage}
          </p>
        )}

        <button
          onClick={handleButtonClick}
          className="w-full bg-red-600 p-3 rounded-md font-semibold cursor-pointer hover:bg-red-700"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-8 text-gray-400" onClick={toggleSignInForm}>
          <span className="text-white font-semibold cursor-pointer hover:underline">
            {isSignInForm
              ? " New to Netflix? Sign Up Now"
              : "Already Registred? Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

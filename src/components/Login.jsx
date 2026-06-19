import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm,setisSignInForm]=useState(true);
  const toggleSignInForm=()=>{
    setisSignInForm(!isSignInForm)
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen "
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="bg"
        />
      </div>

      <form className="absolute left-0 right-0 mx-auto my-36 w-3/12 bg-black/80 p-12 text-white rounded-lg">
        <h1 className="text-3xl font-bold mb-8">{isSignInForm? "Sign In" : "Sign Up"}</h1>

        <input
          type="text"
          placeholder="Email or phone number"
          className="w-full p-4 mb-4 bg-gray-700 rounded-md outline-none"
        />

        {!isSignInForm && ( <input
          type="text"
          placeholder="Full Name"
          className="w-full p-4 mb-4 bg-gray-700 rounded-md outline-none"
        />)}

        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 mb-6 bg-gray-700 rounded-md outline-none"
        />

        <button className="w-full bg-red-600 p-3 rounded-md font-semibold cursor-pointer hover:bg-red-700">
          {isSignInForm? "Sign In" : "Sign Up"}
        </button>

        {/* <div className="flex justify-between text-sm mt-4">
          <label>
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>

          <p className="cursor-pointer hover:underline">Need help?</p>
        </div> */}

        <p className="mt-8 text-gray-400"
          onClick={toggleSignInForm}>
        
          <span className="text-white font-semibold cursor-pointer hover:underline">
           {isSignInForm? " New to Netflix? Sign Up Now" : "Already Registred? Sign In now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;

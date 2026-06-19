import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router-dom"
import { onAuthStateChanged } from "firebase/auth"
import Browse from "./Browse"
import Login from "./Login"
import { useEffect } from "react"
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUser } from "../utils/userSlice"

const Body = () => {
    const dispatch=useDispatch();
    
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ])
    useEffect(()=>{
        onAuthStateChanged(auth, (user)=>{
            // if user is sign in or sign up , it will give information
            if(user){
                const {uid,email,displayName}=user;
                dispatch(addUser({uid:uid,email:email,displayName:displayName}));
                
            }
            else{
                // user is signout
                dispatch(removeUser());
                
            }
        });
    },[]);
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
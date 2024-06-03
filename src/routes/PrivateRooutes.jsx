/* eslint-disable no-unused-vars */
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Navigate } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function PrivateRooutes({children}) {
  const [user,loading]=useAuthState(auth);
  if(loading){
    return <span className="loading loading-spinner loading-lg text-center"></span>
  }
  if(!user){
    return <Navigate to="/login"/>
  }


    return children;
}
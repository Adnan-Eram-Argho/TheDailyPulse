import auth from "./firebase.config";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

function GoogleLogin() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleSignIn=()=>{
        signInWithGoogle()
    }
  return (
    <div className="flex justify-center ">
      <button onClick={handleGoogleSignIn} className="btn btn-neutral mb-6 mt-6 w-80">Sign In with google</button>
    </div>
  )
}

export default GoogleLogin

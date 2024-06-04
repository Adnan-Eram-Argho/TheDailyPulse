import auth from "./firebase.config";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

function GoogleLogin() {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const handleGoogleSignIn=()=>{
        signInWithGoogle().then(data=>{
          if(data?.user?.email){
            const userInfo = {
              email: data?.user?.email,
              name:data?.user?.displayName
            }
            fetch("http://localhost:5000/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            }).then(res=>res.json()).then(data=>localStorage.setItem('token',data?.token))
    
          }
        })
    }
  return (
    <div className="flex justify-center ">
      <button onClick={handleGoogleSignIn} className="btn btn-neutral mb-6 mt-6 w-80">Sign In with google</button>
    </div>
  )
}

export default GoogleLogin

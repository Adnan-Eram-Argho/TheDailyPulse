/* eslint-disable no-unused-vars */
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import GoogleLogin from "../firebase/GoogleLogin";



function Registration() {
    const [user] = useAuthState(auth);
    const Navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    useEffect(() => {
        if (user) {
            Navigate('/')
        }

    }, [Navigate, user])


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        const name = form.name.value;

        createUserWithEmailAndPassword(email, pass).then(data=>{
            if(data?.user?.email){
                const userInfo = {
                  email: data?.user?.email,
                  name:name
                }
                fetch("https://the-daily-pulse-server-git-main-adnan-eram-arghos-projects.vercel.app/user", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(userInfo),
                }).then(res=>res.json()).then(data=>console.log(data))
        
              }
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Please register now to our website in order to make changes and work in dashboard.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" required name="name" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required name="email" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required name="pass" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p>Don,t have an account? <Link to={'/login'} className="text-orange-500">login</Link></p>
                        {
                            error && <p>{error?.message}</p>
                        }
                    </form>
                    <GoogleLogin />
                </div>
            </div>
        </div>
    )
}

export default Registration

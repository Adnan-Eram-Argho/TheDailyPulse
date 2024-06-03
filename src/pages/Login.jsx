/* eslint-disable no-unused-vars */
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import GoogleLogin from "../firebase/GoogleLogin";
import auth from "../firebase/firebase.config";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const [user] = useAuthState(auth);
  const Navigate = useNavigate();
  const [signInWithEmailAndPassword, user1, loading, error] =
    useSignInWithEmailAndPassword(auth);

  useEffect(() => {
    if (user) {
      Navigate("/");
    }
  }, [Navigate, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;

    signInWithEmailAndPassword(email, pass);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">Please login</p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                name="pass"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p>
              Don,t have an account?{" "}
              <Link to={"/register"} className="text-orange-500">
                Register
              </Link>
            </p>
            {error && <p>{error?.message}</p>}
          </form>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
}

export default Login;

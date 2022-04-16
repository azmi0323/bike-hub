import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import './LogIn.css'
const LogIn = () => {
  const [signInWithGoogle, error] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };
  if (error) {
  }

  return (
    <div className="mt-5">
      <form className="w-50 mx-auto">
        <h3 className="text-center text-white">Please Login</h3>
        <input
          className="w-100 mt-3 input-field"
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
        />
        <input
          className="w-100 input-field mt-3"
          type="password"
          placeholder="Your password"
          name=""
          id=""
        />

        <p className="text-info mt-3">New at CaptureTheMoment?  <Link className="text-decoration-none text-black rounded px-2 ms-2 fw-bold my-2 bg-warning" to='/signUp'>Create an Account</Link></p>
        <input
          className="login-btn d-block mx-auto mt-3"
          type="button"
          value="Login"
        />
        <div className="text-white d-flex justify-content-center mt-3">
          <div></div>
          <div>or</div>
          <div></div>
        </div>
        <input
          onClick={() => handleGoogleSignIn()}
          className="mt-3 d-block mx-auto signIn-with-google-btn"
          type="button"
          value="SignIn With Google"
        />
      </form>
    </div>
  );
};

export default LogIn;

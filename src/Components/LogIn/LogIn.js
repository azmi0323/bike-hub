import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";


const LogIn = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithGoogle().then(() => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <form className="">
        <input
          className=""
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email"
        />
        <br />
        <input
          className=""
          type="password"
          placeholder="Your password"
          name=""
          id=""
        />
        <br />
        <input className="btn btn-primary" type="button" value="Login" />
        <br />
        <input
          onClick={() => handleGoogleSignIn()}
          className="btn mt-2 btn-info"
          type="button"
          value="SignIn With Google"
        />
      </form>
    </div>
  );
};

export default LogIn;

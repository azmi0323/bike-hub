import logo from "../../images/logo1.png"
import logo2 from "../../images/logo2.png"
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./LogIn.css";
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
    <div className=" login-page my-4">
      <form className="w-50 mx-auto">
        <h3 className="text-center text-success fw-bold pt-4">Please Login</h3>
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Email:
        </label>
        <input
          className="w-100 input-field"
          type="email"
          name=""
          id=""
          required
        />
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Password:
        </label>
        <input
          className="w-100 input-field"
          type="password"
          name=""
          id=""
          required
        />

        <p className="text-danger fw-bold mt-3">
          New at CaptureTheMoment?{" "}
          <Link
            className="text-decoration-none text-black rounded px-2 ms-2 fw-bold my-2 bg-warning"
            to="/signUp"
          >
            Create an Account
          </Link>
        </p>
        <input
          className="login-btn d-block mx-auto mt-3"
          type="button"
          value="Login"
        />
        <div className="text-success d-flex justify-content-center mt-3">
          <div></div>
          <div>or</div>
          <div></div>
        </div>
        <button onClick={() => handleGoogleSignIn()}
          className="mt-3 d-block mx-auto signIn-with-google-btn"
          type="button"
          
          value="SignIn With Google">
          <img className="me-3" src={logo} alt="" />  SignIn With Google
        </button>
        <button onClick={() => handleGoogleSignIn()}
          className="mt-3 d-block mx-auto signIn-with-google-btn"
          type="button"
          
          value="SignIn With Google">
          <img className="me-3" src={logo2} alt="" />  SignIn With GitHub
        </button>
      </form>
    </div>
  );
};

export default LogIn;

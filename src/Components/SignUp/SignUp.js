import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  return (
    <div className="mt-5">
      <form className="w-50 mx-auto">
        <h3 className="text-center text-white">Please Sign up</h3>
        <input
          className="w-100 mt-3 input-field"
          type="email"
          name=""
          id=""
          placeholder="Enter Your Name"
        />
        <input
          className="w-100 mt-3 input-field"
          type="text"
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

        <p className="text-info mt-3">
          Already have an Account?
          <span >
            <Link className="text-decoration-none text-black rounded px-2 ms-2 fw-bold my-2 bg-warning" to="/logIn">Please Log In</Link>
          </span>
        </p>
        <input
          className="login-btn d-block mx-auto mt-3"
          type="button"
          value="SignUp"
        />
      </form>
    </div>
  );
};

export default SignUp;

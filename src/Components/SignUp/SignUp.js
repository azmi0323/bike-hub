import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
console.log(email,password,confirmPassword);
  const handleCreateUser = (event) => {
    event.preventDefault();
    if(password!==confirmPassword){
      setError('Password did not Match')
      return;
    }
  };

  return (
    <div className=" my-4">
      <form onSubmit={handleCreateUser} className="w-50 mx-auto">
        <h3 className="text-center text-success fw-bold pt-4">
          Please Sign up
        </h3>
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Name:
        </label>
        <input
          className="w-100 input-field"
          type="email"
          name=""
          id=""
        />
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Email:
        </label>
        <input
          onBlur={handleEmailBlur}
          className="w-100 input-field"
          type="text"
          name=""
          id=""
          required
        />
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Password:
        </label>
        <input
          onBlur={handlePasswordBlur}
          className="w-100 input-field"
          type="password"
          required
          name=""
          id=""
        />
        <label className="mt-3 text-success fw-bold" htmlFor="email">
          Confirm Password:
        </label>
        <input
          onBlur={handleConfirmPasswordBlur}
          className="w-100 input-field"
          type="password"
          required
          name=""
          id=""
        />
        <p className="text-danger">{error}</p>
        <p className="text-info mt-3">
          Already have an Account?
          <span>
            <Link
              className="text-decoration-none text-black rounded px-2 ms-2 fw-bold my-2 bg-warning"
              to="/logIn"
            >
              Please Log In
            </Link>
          </span>
        </p>

        <input
          className="login-btn d-block mx-auto mt-3"
          type="button"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default SignUp;

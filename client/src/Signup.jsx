import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handdleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => console.log(result).catch((err) => console.log(err)));
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
          <h2>Register</h2>
          <form onSubmit={handdleSubmit}>
            <div className="mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter the name"
                autoComplete="off"
                name="name"
                className="form-control rounded-0"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter the email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>
                <strong>password</strong>
              </label>
              <input
                type="text"
                placeholder="Enter the password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                onChange={(e) => setPassword(e.target.password)}
              />
            </div>

            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </form>
          <p>Already have an Account</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

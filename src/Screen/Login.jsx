import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigation=useNavigate();
  const [cred, setcred] = useState({
    name: "",
    email: "",
    password: "",
    locationL:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault(); // Synthetic event
    const response = await fetch("http://localhost:4000/api/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: cred.email,
        password: cred.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
        localStorage.setItem("authToken",json.authtoken)
        alert("Login Succesfull")
        console.log(localStorage.getItem("authToken"))
       navigation("/");
      }
  };

  const onChange = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div id="container">
        <form onSubmit={handleSubmit}>
      
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name="email"
              value={cred.email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={cred.password}
              onChange={onChange}
            />
          </div>
        
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              name="check"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="m-3 btn btn-primary mt-3">
            Submit
          </button>
          <Link to="/signup" className="m-3 btn btn-danger">
            Not a Account! Signup
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;

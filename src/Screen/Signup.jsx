import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navi=useNavigate();
  const [cred, setcred] = useState({
    name: "",
    email: "",
    password: "",
    locationL:""
  });
  const onChange = (e) => {
    setcred({ ...cred, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Synthetic event
    const response = await fetch("http://localhost:4000/api/creatuser", {
      method: 'POST', // Correct the method name to uppercase
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: cred.name,
        email: cred.email,
        password: cred.password,
        location: cred.location,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
    if (json.success) {
      alert("SignUp Succesful");
      navi("/login");
    }
  };



  return (
    <>
      <div id="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              aria-describedby="name"
              placeholder="Enter name"
              name="name"
              value={cred.name}
              onChange={onChange}
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="exampleInputLocation">Location</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputLocation"
              placeholder="Password"
              name="location"
              value={cred.location}
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
          <Link to="/login" className="m-3 btn btn-danger">
            Already user Login
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;

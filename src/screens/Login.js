import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
export default function Login() {
  //   use fetch api ,inbuilt function
  //   synthetic event e.preventDefault();
  let navigate=useNavigate()
  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(
      JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      })
    );
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid Credentials");
    }
    
    if (json.success) {
      localStorage.setItem("userEmail", credentials.email);
        console.log(localStorage.getItem("userEmail"));  
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"))  
      navigate("/")
    }
  };

  const onchange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              value={credentials.email}
              onChange={onchange}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              value={credentials.password}
              onChange={onchange}
            />
          </div>

          <button type="submit" className=" m-3 btn btn-success">
            Login
          </button>
          <Link to="/createuser" className="m-3 btn btn-warning">
            I am a new user
          </Link>
        </form>
      </div>
    </>
  );
}

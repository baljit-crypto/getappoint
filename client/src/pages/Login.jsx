import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/ApiRoutes";
import ClipLoader from "react-spinners/ClipLoader";
import LoginCtrl from "../utils/login_ctrl";

function Login() {
  let [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const toastOptions = {
    position: "top-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      setLoading(!loading);
      const { email, password } = values;
      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });
      if (data.status === false) {
        setLoading(loading);
        toast.error(data.msg, toastOptions);
      } else {
        const user = {
          _id: data._id,
          username: data.username,
          email: data.email,
          accessToken: data.accessToken,
        };
        setLoading(loading);
        LoginCtrl.loggedInAs(user);
      }
    } else {
      setLoading(loading);
      alert("not validated");
    }
  };

  const handleValidation = () => {
    const { email, password } = values;
    if (password === "") {
      toast.error("password is required!", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("email is required!", toastOptions);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="formContainer">
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>Sign In</h1>
          </div>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(event) => handleChange(event)}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Login</button>
          <span>
            Not have an account? <Link to="/Register">Register</Link>
          </span>
        </form>
        <ClipLoader
          color={"#6a702c"}
          loading={loading}
          size={50}
          className="cliploader"
        />
      </div>
      <ToastContainer />
    </>
  );
}

export default Login;

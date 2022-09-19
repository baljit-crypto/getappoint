import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import LoginCtrl from "../utils/login_ctrl";
import api from "../utils/api";
import { registerRoute } from "../utils/ApiRoutes";
import ClipLoader from "react-spinners/ClipLoader";

function Register() {
  let [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      const { username, email, password } = values;
      axios
        .post(registerRoute, {
          username: username,
          email: email,
          password: password,
        })
        .then((data) => {
          console.log(data);
          if (data.error) {
            setLoading(loading);
            return;
          }
          const user = {
            _id: data.data._id,
            username: data.data.username,
            email: data.data.email,
            accessToken: data.data.accessToken,
          };
          setLoading(loading);
          LoginCtrl.loggedInAs(user);
        });
      // api
      //   .post(registerRoute, {
      //     username: username,
      //     email: email,
      //     password: password,
      //   })
      //   .then((data) => {
      //     if (data.error) {
      //       return;
      //     }
      //     console.log(data);
      //     const user = {
      //       _id: data._id,
      //       username: data.username,
      //       email: data.email,
      //       accessToken: data.accessToken,
      //     };
      //     LoginCtrl.loggedInAs(user);
      //   });
      // const {data} =  await axios.post(registerRoute,{
      //     username,email,password
      // })
    }
  };

  const handleValidation = () => {
    const { email, password, confirmPassword } = values;
    if (password === "") {
      toast.error("password is required!", toastOptions);
      return false;
    } else if (password !== confirmPassword) {
      toast.error("password and confirmPassword should be same!", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("password length should be 8 or more than 8!", toastOptions);
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
            <h1>Create an Account</h1>
          </div>
          <input
            name="username"
            type="text"
            placeholder="Username"
            onChange={(event) => handleChange(event)}
          />
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
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(event) => handleChange(event)}
          />
          <button type="submit">Create User</button>
          <span>
            already have an account? <Link to="/Login">Login</Link>
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

export default Register;

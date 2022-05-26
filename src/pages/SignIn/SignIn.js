import React, { useReducer, useState } from "react";
import "./SignIn.css";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = ({userTokenUpdate}) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState()

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'http://kaiaman.pythonanywhere.com/admin/auth/user/',
      data: {
        email: values.email,
        password: values.password
      }
    }).then (({key}) => {
      console.log(key)
      userTokenUpdate(key)
    })
  };

  const onChange = (e) => {
    setValues({ 
      ...values,
      [e.target.name]: e.target.value 
    });
  };

  return (
    <div className="app">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h1 className="sign-in-h1">Sign in</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to="/forgot-password" className="forgot-pass-link">Forgot password?</Link>
        <button className="sign-in-btn">Sign in</button>
        <div className="sign-up-link">
          <Link to="/register" className="sign-up">Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

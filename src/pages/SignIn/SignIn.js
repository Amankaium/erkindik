import React, { useContext, useState } from "react";
import "./SignIn.css";
import FormInput from "../../components/FormInput/FormInput";
import { Link, Navigate} from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../../App";

const SignIn = ({setToken, setLoginState}) => {

  const login = useContext(LoginContext)

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Логин",
      label: "Логин",
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Пароль",
      label: "Пароль",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: 'post',
      url: 'http://kaiaman.pythonanywhere.com/api/login',
      data: {
        username: values.username,
        password: values.password
      }
    }).then (({data}) => {
      const token = data.key
      console.log(token)
      setToken(token)
      setLoginState(true)
      console.log(login)
    })
  };

  const onChange = (e) => {
    setValues({ 
      ...values,
      [e.target.name]: e.target.value 
    });
  };

  return (


    <div className="sign-in-app">
      {login ? (<Navigate to="/" />) : (
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h1 className="sign-in-h1">Войти</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <Link to="/forgot-password" className="forgot-pass-link">Забыли пароль?</Link>
        <button className="sign-in-btn">Войти</button>
        <div className="sign-up-link">
          <Link to="/register" className="sign-up">Регистрация</Link>
        </div>
      </form>
      )}
    </div>
  );
};

export default SignIn;

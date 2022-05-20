import React, { useState } from "react";
import "./ForgotPassword.css";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [values, setValues] = useState({
    email: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Password forget</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Send</button>
        <div className="sign-up-link">
          <Link to="/register" className="sign-up">Create account</Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

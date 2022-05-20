import React, { useState } from "react";
import "./SignUp.css";
import FormInput from "../../components/FormInput/FormInput";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "fullname",
            type: "text",
            placeholder: "Full name",
            errorMessage:
                "Full name should be 1-50 characters and shouldn't include any special character!",
            label: "Full name",
            pattern: "^[A-Za-z0-9]{1,50}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
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
                <h1>Sign up</h1>
                {inputs.map((input) => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button>Submit</button>
                <div className="accept-terms-condition">
                    By clicking Submit, you agree on our <Link to="/terms-and-condition" className="terms-condition-link">terms and condition</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUp;

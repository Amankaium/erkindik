import React, { useState } from "react";
import "./SignUp.css";
import FormInput from "../../components/FormInput/FormInput";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [success, setSuccess] = useState(false)

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Логин",
            errorMessage:
                "Имя пользователя должно содержать от 1 до 50 символов и не должно содержать никаких специальных символов!",
            label: "Логин",
            pattern: "^[A-Za-z0-9]{1,50}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "Это должен быть действующий адрес электронной почты!",
            label: "Email",
            required: true,
        },
        {
            id: 3,
            name: "password",
            type: "password",
            placeholder: "Пароль",
            errorMessage:
                "Пароль должен состоять из 8-20 символов и содержать как минимум 1 букву, 1 цифру!",
            label: "Пароль",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$`,
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            type: "password",
            placeholder: "Повторите пароль",
            errorMessage: "Неверный пароль!",
            label: "Повторите пароль",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post('http://kaiaman.pythonanywhere.com/api/registration', {
            username: values.username,
            email: values.email,
            password: values.password
          })
          .then(response => { 
            if(response.status === 201) {
                setSuccess(true)
            }})
          .catch(error => {
            console.log(error);
          });
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (

        <div className="sign-up-app">
            {success ? (<Navigate to="/login" />) : 
            ( <form className="sign-up-form" onSubmit={handleSubmit}>
            <h1 className="sign-up-h1">Регистрация</h1>
            {inputs.map((input) => (
                <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                />
            ))}
            <button className="sign-up-btn" >Зарегистрироваться</button>
            <div className="accept-terms-condition">
                Нажимая на кнопку вы соглашаетесь с<br/> <Link to="/terms-and-condition" className="terms-condition-link">условиями использования</Link>
            </div>
        </form>)} 
        </div>
    );
};

export default SignUp;

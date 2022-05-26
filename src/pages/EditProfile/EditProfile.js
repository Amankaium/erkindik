import React, {useState} from "react";
import "./EditProfile.css";
import ProfileInput from "../../components/ProfileInput/ProfileInput";

function EditProfile() {

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
        {
            id: 5,
            name: "about",
            type: "textarea",
            placeholder: "...about myself",
            label: "About",
        },
    ];

    const [uploadImg, setUploadImg] = useState(null)

    const changeAvatar = () => {
        if(uploadImg == null) return;

        
    }

    const changeImg = (e) => {
        setUploadImg(e.target.files[0])
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="main-container">
            <div className="change-avatar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="avatar" className="avatar"/>
                <input 
                    type="file" 
                    className="upload-img"
                    onChange={changeImg} />
                <button className="profile-btn" onClick={changeAvatar}>Save Photo</button>
            </div>
            <div className="edit-profile">
                <h3 className="edit-profile-h3">Edit Profile</h3>
            {inputs.map((input) => (
                    <ProfileInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button className="profile-btn">Save</button>
            </div>
        </div>
    );
};

export default EditProfile;

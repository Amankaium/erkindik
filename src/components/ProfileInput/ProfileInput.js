import React, {useState} from "react";
import "./ProfileInput.css"

const ProfileInput = (props) => {
    const [focused, setFocused] = useState(false);
    const { label, errorMessage, onChange, id, ...inputProps } = props;
  
    const handleFocus = (e) => {
      setFocused(true);
    };
  
    return (
      <div className="profileInput">
        <label className="profile-input-label">{label}</label>
        <input className="profile-input"
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() =>
            inputProps.name === "confirmPassword" && setFocused(true)
          }
          focused={focused.toString()}
        />
        <span className="profile-input-span">{errorMessage}</span>
      </div>
    );
  };

  export default ProfileInput;

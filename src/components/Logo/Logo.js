import React from "react";
import LogoImg from "../../assets/logo.png"

function Logo() {
    const logoStyle = {
        width: "150px",
        height: "80px",
    }

    return (
        <div>
            <img style={logoStyle}  alt="logo" src={LogoImg} />
        </div>
    )
}

export default Logo;
import React from "react";
import LogoImg from "../../assets/logo2.jpg"

function Logo() {
    const logoStyle = {
        width: "169pxpx",
        height: "80px",
    }

    return (
        <div>
            <img style={logoStyle}  alt="logo" src={LogoImg} />
        </div>
    )
}

export default Logo;
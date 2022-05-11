import React from "react";
import { Link } from "react-router-dom";

export default function LinkA (props) {
    const linkStyle = {
        alignItems: "center",
        textALign: "center",
    }

    return (
            <Link {...props} style={linkStyle} to={props.href}>{props.children}</Link>
    )
}
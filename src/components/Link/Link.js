import React from "react";
import './Link.css';
import { Link } from "react-router-dom";

export default function LinkA (props) {
    return (
            <Link {...props} className={"linkStyle"} to={props.href}>{props.children}</Link>
    )
}
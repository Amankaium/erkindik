import React, {useState} from "react";
import { Link } from "react-router-dom";

function UserToken () {

    const [token, setToken] = useState()

    if (token) {
        return <Link to="/artist/about" />
    } else {
        return <Link to="/register" />
    }
}

export default UserToken;

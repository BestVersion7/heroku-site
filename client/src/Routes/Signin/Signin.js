import React, { useState } from "react";
import { CredentialFail } from "../../utilities/credentialModal";
import { NavLink, Redirect } from "react-router-dom";
import axios from "axios";
import { Button } from "@material-ui/core";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [credFail, setCredFail] = useState(false);
    const [redirectPage, setRedirectPage] = useState(false);

    const handleLogin = async e => {
        e.preventDefault();
        try {
            // set cookie
            await axios.post("/api/user/signin", { username, password });
            setRedirectPage(true);
            window.location.reload();
        } catch (err) {
            setRedirectPage(false);
            setCredFail(true);
        }
    };
    const handleUsernameChange = e => {
        e.preventDefault();
        setUsername(e.target.value);
        setCredFail(false);
    };
    const handlePasswordChange = e => {
        e.preventDefault();
        setPassword(e.target.value);
        setCredFail(false);
    };

    if (redirectPage) return <Redirect to={`/account`} />;

    return (
        <div className="page-container">
            <h3>Sign-in TO SEE A HIDDEN PAGE!</h3>
            <p>(Username: fast; Password: fast)</p>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input onChange={handleUsernameChange} /> <br />
                <label>Password </label>
                <input
                    type="current-password"
                    onChange={handlePasswordChange}
                />{" "}
                <br />
                <Button type="submit" variant="contained" color="primary">
                    {" "}
                    Login{" "}
                </Button>
            </form>
            <NavLink className="btn-redirect-link" to="/signup">
                Don't have an account? Sign up here!
            </NavLink>
            <br />
            <div style={{ height: "1em" }}>
                {credFail && <CredentialFail />}
            </div>
        </div>
    );
};

export default Signin;

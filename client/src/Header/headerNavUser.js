import React from "react";
import { Link } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";
import axios from "axios";

const HeaderNavUser = () => {
    const handleSignout = async () => {
        await axios.post('/api/user/signout')
        window.location.reload()
    }
    return (
        <div>
            <ListItem button component={Link} to="/account">
                <ListItemText primary="Account" />
            </ListItem>
            <ListItem button component={Link} to="/">
                <ListItemText primary="Sign out" onClick={handleSignout} />
            </ListItem>
        </div>
    );
};

export default HeaderNavUser;

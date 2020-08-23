import React from 'react';
import "./Header.css"
import {Person,Forum} from "@material-ui/icons"

const Header = () => {
    return (
        <div className="header">
            <Person/>
            <Forum/>
        </div>
    );
};

export default Header;
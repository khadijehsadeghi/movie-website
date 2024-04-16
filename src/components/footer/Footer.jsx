import React from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaTelegram
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem" onClick={() => navigate( "/about" )}>About</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    The Movie Database (TMDB) is a community built movie and TV database.
                    <p>Made By Khadijeh Sadeghi (Front-End Developer).</p>
                    <p>© 2024 - React Movie App</p>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <a style={{ color: "white" }} href="https://github.com/khadijehsadeghi"><FaGithub /></a>
                    </span>
                    <span className="icon">
                        <a style={{ color: "white" }} href="https://www.linkedin.com/in/khadijeh-sadeghi"><FaLinkedinIn /></a>
                    </span>
                    <span className="icon">
                        <a style={{ color: "white" }} href="https://t.me/sadeghi120"><FaTelegram /></a>
                    </span>
                    <span className="icon">
                        <a style={{ color: "white" }} href="https://kh.sadeghi95@gmail.com" ><MdEmail /></a>
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;

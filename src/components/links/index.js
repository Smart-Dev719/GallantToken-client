import React from "react";
import "./css/links.css";
import { FaDiscord, FaTelegramPlane, FaTwitter, FaYoutube, FaTwitch, FaInstagramSquare } from "react-icons/fa";

const links = (props) => {

    const icons = props.HeaderIcons;

    return (
        <>
            <div className="w-100 bg-black d-flex justify-content-center">
                <div className="PageHeaderLinks d-flex justify-content-left">
                    <div className="PageHederIcons icon-group d-flex justify-content-center">

                        <FaTelegramPlane className="iconImg" />
                        <FaDiscord className="iconImg" />
                        <FaTwitch className="iconImg" />
                        <FaTwitter className="iconImg" />
                        <FaYoutube className="iconImg" />
                        <FaInstagramSquare className="iconImg" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default links;
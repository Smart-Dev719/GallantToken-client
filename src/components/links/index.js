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
                        <a href="https://t.me/GallantTokenOfficial" target="_blank"><FaTelegramPlane className="iconImg" style={{ height: '20px', width: '20px', }} /></a>
                        <a href="https://discord.gg/gallanttoken" target="_blank"><FaDiscord className="iconImg" style={{ height: '20px', width: '20px', }} /></a>
                        <a href="https://www.twitch.tv/gallanttoken" target="_blank"><FaTwitch className="iconImg" style={{ height: '20px', width: '20px', }} /></a>
                        <a href="https://twitter.com/GallantToken" target="_blank"><FaTwitter className="iconImg" style={{ height: '20px', width: '20px', }} /></a>
                        <a href="https://www.youtube.com/c/GallantToken" target="_blank"><FaYoutube className="iconImg" style={{ height: '20px', width: '20px', }} /></a>
                        <a href="https://www.instagram.com/gallanttokenofficial" target="_blank"><FaInstagramSquare className="iconImg" style={{ height: '20px', width: '20px', }} /></a>


                    </div>
                </div>
            </div>
        </>
    );
}

export default links;
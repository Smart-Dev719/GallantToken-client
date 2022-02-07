import React from "react";
import "../css/MintBg.css";
import Helmet from "../../../assets/img/testhelmetsitetest.png"
import Video from "../../../assets/img/Electronics.mp4";

const MintBg = () => {

    return (
        <div >
            <div className="mintBackImg">
                <video autoPlay muted loop className="helmetVideo">
                    <source src={Video} type="video/mp4" />
                </video>

                <div className="helmetImgs">
                    <img src={Helmet} className="HelmetImg" alt="" />
                    <img src={Helmet} className="HelmetImg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MintBg;
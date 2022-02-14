import React from "react";
import "../css/MintBg.css";
import Helmet from "../../../assets/img/testhelmetsitetest.png"
import Video from "../../../assets/img/Electronics.mp4";
import Mintdesign from "../../../assets/img/Mint-Page-Design.png"

const MintBg = () => {

    return (
        <div >
            <div className="mintBackImg">
                <div className="helmetImgs">
                    <img src={Mintdesign} className="HelmetImg" alt="" />
                </div>

            </div>
        </div>
    )
}

export default MintBg;
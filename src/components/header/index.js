import React from "react";
import "./css/header.css";
import HeaderLogo from "assets/img/header.png"
import { UnorderedListOutlined } from "@ant-design/icons";

const header = () => {
    return (
        <>
            <div className="PageHeader d-flex justify-content-center align-items-center" >
                <div className="PageHeaderInRow px-lg-2 d-flex justify-content-center align-items-center" >
                    <img src={HeaderLogo} className="HeaderLogo" alt="" />
                    <span style={{ flex: 1 }}></span>
                    <div className="PageLinksItems">
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Home</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Home</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">News</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Gaming</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Fun</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Gnarly Knights</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Audit</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Chart</span>
                        </a>
                        <a href="https://gallanttoken.com/buynow/" className="text-decoration-none" >
                            <span className="HeaderItem">Buy Now</span>
                        </a>
                        <a href="#header" className="text-decoration-none" >
                            <span className="HeaderItem">Team</span>
                        </a>
                    </div>
                    <span><UnorderedListOutlined className="WrapIcon" /></span>
                </div>
            </div>
        </>
    );
}

export default header;
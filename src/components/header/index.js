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
                        <a href="https://gallanttoken.com/" className="text-decoration-none" >
                            <span className="HeaderItem">Home</span>
                        </a>
                        <a href="https://gallanttoken.com/news/" className="text-decoration-none" >
                            <span className="HeaderItem">News</span>
                        </a>
                        {/* <a href="https://gallanttoken.com/gaming/" className="text-decoration-none" >
                            <span className="HeaderItem">Gaming</span>
                        </a> */}
                        <div className="dropdown">
                            <div className="dropbtn">
                                <a href="https://gallanttoken.com/gaming/" className="text-decoration-none" >
                                    <span className="HeaderItem">Gaming
                                        <span className="HeaderItemSpec">. . .</span>
                                    </span>

                                </a>
                            </div>
                            <div className="dropdown-content">
                                <a href="https://gallanttoken.com/gallant-warriors/"><span className="HeaderItem">Gallant Warriors</span></a>
                                <a href="https://gallanttoken.com/kings-calling/"><span className="HeaderItem">King's Calling</span></a>
                            </div>
                        </div>
                        <a href="https://gnarlyknightsnft.com/" className="text-decoration-none" >
                            <span className="HeaderItem">NFT's</span>
                        </a>

                        <div className="dropdown">
                            <div className="dropbtn">
                                <a href=" " className="text-decoration-none" >
                                    <span className="HeaderItem">Fun
                                        <span className="HeaderItemSpec">. . .</span>
                                    </span>
                                </a>
                            </div>
                            <div className="dropdown-content">
                                <a href="https://discord.com/channels/861694191720464394/929475023683608666/929475751072387102"><span className="HeaderItem">Giveaways</span></a>
                                <a href="https://gallanttoken.com/tournaments/"><span className="HeaderItem">Tournaments</span></a>
                                <a href="https://gallanttoken.myspreadshop.com/all"><span className="HeaderItem">Store</span></a>
                            </div>
                        </div>
                        <a href="https://gallanttoken.com/audit/" className="text-decoration-none" >
                            <span className="HeaderItem">Audit</span>
                        </a>

                        <div className="dropdown">
                            <div className="dropbtn">
                                <a href=" " className="text-decoration-none" >
                                    <span className="HeaderItem">Chart
                                        <span className="HeaderItemSpec">. . .</span>
                                    </span>
                                </a>
                            </div>
                            <div className="dropdown-content">
                                <a href="https://dex.guru/token/0x580655e2c6d4fc125c0b2d37b2a3e56219bf9f78-bsc"><span className="HeaderItem">DexGuru</span></a>
                                <a href="https://www.dextools.io/app/pancakeswap/pair-explorer/0xd4c39e96bf03d6fb5156bc25ed1d6303c38d91cc"><span className="HeaderItem">DexTools</span></a>
                                <a href="https://poocoin.app/tokens/0x580655e2c6d4fc125c0b2d37b2a3e56219bf9f78"><span className="HeaderItem">PooCoin</span></a>
                            </div>
                        </div>
                        <a href="https://gallanttoken.com/buynow/" className="text-decoration-none" >
                            <span className="HeaderItem">Buy Now</span>
                        </a>
                        <a href="https://gallanttoken.com/team/" className="text-decoration-none" >
                            <span className="HeaderItem">Team</span>
                        </a>
                    </div>
                    <span>
                        <button className="btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">

                            <UnorderedListOutlined className="WrapIcon" />

                        </button>

                        <div className="offcanvas offcanvas-start PageToggleItems" tabindex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel">
                            <div className="offcanvas-header">
                                <img src={HeaderLogo} className="HeaderLogo" alt="" />
                            </div>
                            <div className="offcanvas-body">
                                <div className="PageLinksItems1 d-flex flex-column align-items-left">
                                    <a href="https://gallanttoken.com/" className="text-decoration-none" >
                                        <span className="HeaderItem1">Home</span>
                                    </a>
                                    <a href="https://gallanttoken.com/news/" className="text-decoration-none" >
                                        <span className="HeaderItem1">News</span>
                                    </a>

                                    <div className="dropdown">
                                        <div className="dropbtn">
                                            <a href="https://gallanttoken.com/gaming/" className="text-decoration-none" >
                                                <span className="HeaderItem1">Gaming
                                                    <span className="HeaderItemSpec">. . .</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="dropdown-content">
                                            <a href="https://gallanttoken.com/gallant-warriors/"><span className="HeaderItem1">Gallant Warriors</span></a>
                                            <a href="https://gallanttoken.com/kings-calling/"><span className="HeaderItem1">King's Calling</span></a>
                                        </div>
                                    </div>
                                    <a href="https://gnarlyknightsnft.com/" className="text-decoration-none" >
                                        <span className="HeaderItem1">NFT's</span>
                                    </a>

                                    <div className="dropdown">
                                        <div className="dropbtn">
                                            <a href=" " className="text-decoration-none" >
                                                <span className="HeaderItem1"><span>Fun</span>
                                                    <span className="HeaderItemSpec">. . .</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="dropdown-content">
                                            <a href="https://discord.com/channels/861694191720464394/929475023683608666/929475751072387102"><span className="HeaderItem">Giveaways</span></a>
                                            <a href="https://gallanttoken.com/tournaments/"><span className="HeaderItem">Tournaments</span></a>
                                            <a href="https://gallanttoken.myspreadshop.com/all"><span className="HeaderItem">Store</span></a>
                                        </div>
                                    </div>
                                    <a href="https://gallanttoken.com/audit/" className="text-decoration-none" >
                                        <span className="HeaderItem1">Audit</span>
                                    </a>

                                    <div className="dropdown">
                                        <div className="dropbtn">
                                            <a href=" " className="text-decoration-none" >
                                                <span className="HeaderItem1">Chart
                                                    <span className="HeaderItemSpec">. . .</span>
                                                </span>
                                            </a>
                                        </div>
                                        <div className="dropdown-content">
                                            <a href="https://dex.guru/token/0x580655e2c6d4fc125c0b2d37b2a3e56219bf9f78-bsc"><span className="HeaderItem">DexGuru</span></a>
                                            <a href="https://www.dextools.io/app/pancakeswap/pair-explorer/0xd4c39e96bf03d6fb5156bc25ed1d6303c38d91cc"><span className="HeaderItem">DexTools</span></a>
                                            <a href="https://poocoin.app/tokens/0x580655e2c6d4fc125c0b2d37b2a3e56219bf9f78"><span className="HeaderItem">PooCoin</span></a>
                                        </div>
                                    </div>
                                    <a href="https://gallanttoken.com/buynow/" className="text-decoration-none" >
                                        <span className="HeaderItem1">Buy Now</span>
                                    </a>
                                    <a href="https://gallanttoken.com/team/" className="text-decoration-none" >
                                        <span className="HeaderItem1">Team</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </span>
                </div>
            </div>
        </>
    );
}

export default header;
import React from "react";
import "../css/MintForm.css";

const MintForm = () => {
    return (
        <>
            <div className="PageMintForm w-100 d-flex justify-content-center">
                <div className="PageMintFormInRow d-flex flex-column align-items-center">
                    <span className="PageMintFormTitle">Contact us for Gnarly Knights NFT Updates:</span>
                    <input type={`text`} placeholder="Email*" className="PageFormInput" />
                    <input type={`text`} placeholder="Name*" className="PageFormInput" />
                    <textarea placeholder="Message*" className="PageFormTextArea" />
                    <div className="BtnSendLayer d-flex justify-content-start">
                        <button className="btnSend">Send</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MintForm;
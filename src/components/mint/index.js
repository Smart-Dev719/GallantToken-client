import React from "react";
import MintForm from "./components/MintForm";
import MintHeader from "./components/MintHeader";
import MintSlider from "./components/MintSlider";
import MintBg from "./components/MintBg";
import "./css/index.css";

const mint = (props) => {
    const { preLoading, setPreLoading, account, metamaskConnected, connectToMetamask } = props;
    return (
        <>
            <div className="PageMintMain">
                <MintHeader
                    preLoading={preLoading}
                    setPreLoading={setPreLoading}
                    account={account}
                    metamaskConnected={metamaskConnected}
                    connectToMetamask={connectToMetamask}
                // connectToWallet={connectToWallet}
                />
                {/* <MintSlider /> */}
                {/* <MintForm /> */}
                <MintBg />
            </div>
        </>
    );
}

export default mint;
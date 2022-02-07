import React from "react";
import { useState, useEffect } from "react";
import "../css/MintHeader.css";
import CounterInput from "react-bootstrap-counter";

import { useSelector, useDispatch } from "react-redux";
import { onGetMintData, onCheckMintable } from "../../../redux/actions/mint";
import { mintNft } from "../../../web3/web3";

const MintHeader = (props) => {
    const { preLoading, setPreLoading, account } = props;
    const dispatch = useDispatch();
    const [selectedCount, setSelectedCount] = useState(1);
    const mintable = useSelector((state) => state.mint);
    const [mintLoading, setMintLoading] = useState(false);
    const [mintStatus, setMintStatus] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [networkId, setNetworkId] = useState();



    useEffect(async () => {
        const web3 = window.web3;
        const networkId = await web3.eth.net.getId();
        setNetworkId(networkId);
        window.ethereum.on("networkChanged", (networkId) => {
            setNetworkId(networkId);
        });
    });

    useEffect(async () => {
        if (mintable.count || mintable.failedMsg) {
            setPreLoading(false);
        }
        if (mintable.failedMsg) {
            setMintLoading(false);
        }
        if (mintable.mintData.success == true) {
            const price = mintable.mintData.price;
            const tokenAmount = mintable.mintData.tokenAmount;
            // const timestamp = mintable.mintData.timestamp;
            // const signature = mintable.mintData.signature;
            await mintNft(price, tokenAmount, account).then(
                (data) => {
                    setMintStatus(data);
                    setMintLoading(false);
                }
            );
        }
    }, [mintable]);

    useEffect(() => {
        if (mintStatus) {
            setViewModal(true);
        }
    }, [mintStatus]);

    const handleMint = () => {
        setMintLoading(true);
        dispatch(onGetMintData({ address: account, count: selectedCount }));
    };

    const handleClose = () => {
        setViewModal(false);
    };

    return (
        <>
            <div className="w-100 d-flex flex-column align-items-center justify-content-center gap-3 py-5">
                {/* <span className="MintHeaderTitle">Coming Soon</span> */}
                <div>
                    <CounterInput
                        value={1}
                        min={1}
                        max={4}
                        onChange={(value) => {
                            setSelectedCount(value);
                        }}
                    />
                </div>

                <button className="MintHeaderBtn" onClick={handleMint}>Mint Your Gnarly Knight</button>
            </div>
        </>
    );
}

export default MintHeader;
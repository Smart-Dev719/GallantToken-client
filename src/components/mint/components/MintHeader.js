import React from "react";
import { useState, useEffect } from "react";
import "../css/MintHeader.css";
import CounterInput from "react-bootstrap-counter";
import { CloseOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { onGetMintData, onCheckMintable } from "../../../redux/actions/mint";
import { mintNft } from "../../../web3/web3";
import Modal from "react-modal";
import WalletConnectIcon from "../../../assets/img/walleticon.png";
import MetamaskIcon from "../../../assets/img/metamaskicon.png";
import Helmet from "../../../assets/img/testhelmetsitetest.png"

const MintHeader = (props) => {
    const { preLoading, setPreLoading, account, metamaskConnected, connectToMetamask } = props;
    const dispatch = useDispatch();
    const [selectedCount, setSelectedCount] = useState(1);
    const mintable = useSelector((state) => state.mint);
    const [mintLoading, setMintLoading] = useState(false);
    const [mintStatus, setMintStatus] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [networkId, setNetworkId] = useState();
    const [modal, setModal] = useState(false);

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
            ).catch(err => {
                console.log(err);
            });
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
                <Modal
                    isOpen={viewModal}
                    onRequestClose={() => setViewModal(false)}
                    contentLabel="Example Modal"
                    className="ConnectModal"
                    overlayClassName="ConnectModalOverlay"
                >
                    <div className="ConnectModalMain d-flex flex-column justify-content-center align-items-center">
                        <div className="ModalHeader d-flex flex-column justify-content-between">
                            <div className="d-flex justify-content-between">
                                <span className="ModalHeaderText"><img src={Helmet} className="ModalLogo" alt='' /></span><span onClick={() => setViewModal(false)}><CloseOutlined className="ModalCloseBtn" /></span>
                            </div>
                            <div className="ModalDescription d-flex flex-column align-items-center">
                                <span className="ModalTitle">Congratulation!</span>
                                <span className="ModalText">You have successfully minted your Gnarlyknight!</span>
                            </div>
                        </div>

                    </div>
                </Modal>
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
                {
                    metamaskConnected ?
                        <button className="MintHeaderBtn" onClick={handleMint}>Mint Your Gnarly Knight</button>
                        :
                        <button className="MintHeaderBtn" onClick={() => connectToMetamask()}>Connect Wallet</button>
                }
            </div >
        </>
    );
}

export default MintHeader;
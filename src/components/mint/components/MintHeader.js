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

const MintHeader = (props) => {
    const { preLoading, setPreLoading, account, metamaskConnected, connectToMetamask, connectToWallet } = props;
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
                <Modal
                    isOpen={modal}
                    onRequestClose={() => setModal(false)}
                    contentLabel="Example Modal"
                    className="ConnectModal"
                    overlayClassName="ConnectModalOverlay"
                >
                    <div className="ConnectModalMain d-flex flex-column justify-content-center align-items-center">
                        <div className="ModalHeader d-flex justify-content-between">
                            <span className="ModalHeaderText">Connect Wallet</span><span onClick={() => setModal(false)}><CloseOutlined /></span>
                        </div>
                        <div className="ConnectWallet d-flex justify-content-between align-items-center" onClick={() => connectToWallet()} >
                            <span>WalletConnect</span><img src={WalletConnectIcon} className="WalletIcon" alt='' />
                        </div>
                        <div className="ConnectWallet d-flex justify-content-between align-items-center" onClick={() => connectToMetamask()}>
                            <span>Metamask Connect</span><img src={MetamaskIcon} className="WalletIcon" width={45} alt='' />
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
                        <button className="MintHeaderBtn" onClick={() => setModal(true)}>Connect Wallet</button>
                }
            </div >
        </>
    );
}

export default MintHeader;
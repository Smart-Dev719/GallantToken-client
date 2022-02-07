import './App.css';
import { useEffect, useState } from 'react';
import Mint from "./components/mint";
import Links from "./components/links";
import Header from "./components/header";
import Footer from "./components/footer";
import { HeaderToolImg } from "constant/img";

import Web3 from "web3";
import { Provider } from 'react-redux';
import store from "./redux/store";



function App() {

  useEffect(() => {
    // loadWeb3();
    connectToMetamask();
  }, []);

  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [account, setAccount] = useState();
  const [preLoading, setPreLoading] = useState(false);

  const connectToMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      window.web3 = new Web3(window.ethereum);
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      console.log("connect info:", accounts);
      setAccount(accounts[0]);
      setMetamaskConnected(true);
      // window.location.reload();      
      console.log(accounts[0]);
    }
  };


  return (
    <Provider store={store}>
      <div className="App">
        <Links HeaderIcons={HeaderToolImg} />
        <Header />
        <Mint
          preLoading={preLoading}
          setPreLoading={setPreLoading}
          account={account}
        />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

import React, {useState} from 'react';
import Web3 from 'web3';


const Wallet = () => {
  const [error, setError] = useState('');
  const [currentAccount, setCurrentAccount] = useState();

  const chainChangedHandler = () => {
    window.location.reload();
  };

  const accountChangedHandler = (newAccount: any) => {
    setCurrentAccount(newAccount)
  };

  const handleConnect = async () => {
    if (!window.ethereum) {
      setError('Install metamask');
      return;
    }

    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    if (!accounts.length) {
      console.log("Please connect to MetaMask!");
    } else if (accounts[0] !== currentAccount) {
      accountChangedHandler(accounts[0]);
    }
  };

  window.ethereum.on('accountsChanged', accountChangedHandler);
  window.ethereum.on('chainChanged', chainChangedHandler);


  return (
    <div>
      <h1 className="text-2xl font-bold underline">
        Hello world!
      </h1>
      <h2>address: {currentAccount}</h2>
      <button onClick={handleConnect}>connect</button>
    </div>
  );
};

export default Wallet;

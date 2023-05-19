import React from 'react';
import Wallet from "./components/Wallet";
import './App.css';
import Header from "./components/Header";
import Connect from "./components/Connect";

const App = () => {

return (
  <div>
      <Header />
      <Connect text={'Connect Wallet'} />
    {/*<Wallet />*/}
  </div>
);
}

export default App;

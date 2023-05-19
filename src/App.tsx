import React from 'react';
import Wallet from "./components/Wallet";
import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import Welcome from "./components/Welcome";

const App = () => {

return (
  <div className='h-full flex flex-col'>
      <Header />
      <Welcome />
      {/*<Card />*/}
    {/*<Wallet />*/}
  </div>
);
}

export default App;

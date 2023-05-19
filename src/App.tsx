import React from 'react';
//import Wallet from "./components/Wallet";
import './App.css';
import Header from "./components/Header";
import Protected from "./hoc/Protected";

const App = () => {

return (
  <div className='h-full flex flex-col'>
      <Header />
      <Protected />
      {/*<Loading description='Connecting ...' />*/}
    {/*<Error message='There was a problem connecting the wallet to the NFTer, try again.' />*/}
      {/*<Card />*/}
    {/*<Wallet />*/}
  </div>
);
}

export default App;

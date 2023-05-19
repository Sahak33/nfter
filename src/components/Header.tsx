import React from 'react';
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import Connect from "./Connect";

const Header = () => {
    return (
        <div className='py-4 px-[25px] flex items-center justify-between border-b border-b-secondary-300'>
          <div className='flex items-center'>
              <Logo/>
              <p className='font-extrabold text-xl ml-3'>NFTer</p>
          </div>
            <Connect />
        </div>
    );
};

export default Header;
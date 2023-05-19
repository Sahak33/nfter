import React from 'react';
import {ReactComponent as MetaFox } from "../assets/images/metafox.svg";
import Connect from "./Connect";

const Welcome = () => {
    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <div className='w-24 h-24 rounded-full bg-yellowLight'>
                <div className='flex h-24 items-center justify-center'>
                    <MetaFox />
                </div>
            </div>
            <h2 className='font-bold text-base mt-4'>Welcome</h2>
            <p className='text-secondary-700 text-sm font-semibold mb-4'>Connect your wallet via MetaMask to continue</p>
            <Connect text={'Connect Wallet'} />
        </div>
    );
};

export default Welcome;
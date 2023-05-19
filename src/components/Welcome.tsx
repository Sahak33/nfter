import React from 'react';
import {ReactComponent as MetaFox } from "../assets/images/metafox.svg";
import Connect from "./Connect";
import {useAppSelector} from "../hooks";
import {accountSelector} from "../helpers/reduxSelectors";
import Loading from "./Loading";
import Error from './Error';

const Welcome = () => {
  const { loading, error } = useAppSelector(accountSelector);
    return (
        <div className='w-full h-full flex items-center justify-center flex-col'>
            <div className='w-24 h-24 rounded-full bg-yellowLight'>
                <div className='flex h-24 items-center justify-center'>
                    <MetaFox />
                </div>
            </div>
            <h2 className='font-bold text-base mt-4'>Welcome</h2>
            <p className='text-secondary-700 text-sm font-semibold mb-4'>Connect your wallet via MetaMask to continue</p>
          {!loading && <Connect text={error ? 'Retry' : 'Connect Wallet'}/>}
          {loading && <Loading description='Connecting ...' />}
          {!loading && error && <Error message={error} />}
        </div>
    );
};

export default Welcome;

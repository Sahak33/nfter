import React from 'react';
import Web3 from "web3";
import {useAppDispatch, useAppSelector} from "hooks";
import {fetchMessage, verify} from "store/account/thunk";
import {accountSelector} from "helpers/reduxSelectors";
import {setAccount, setError, setSignature} from "store/account/accountSlice";

const Connect = ({text = 'Connect'}: any) => {
    const { address, isDisabled } = useAppSelector(accountSelector);
    const dispatch = useAppDispatch();

    const chainChangedHandler = () => {
        window.location.reload();
    };

    const accountChangedHandler = (newAccount: any) => {
        dispatch(setAccount(newAccount[0]));
    };

    const handleConnect = async () => {
        let accounts: any;
        if (!window.ethereum) {
            dispatch(setError('Install metamask'))
            return;
        }

        const web3 = new Web3(window.ethereum);
        accounts = await web3.eth.getAccounts();
        if (!accounts.length) {
           accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
            accountChangedHandler(accounts);
        } else if (accounts[0] !== address) {
            accountChangedHandler(accounts);
        }
       const message = await dispatch(fetchMessage()).unwrap();
       const signature = await web3.eth.personal.sign(message, accounts[0], 'test');
       const verifyData = {
             message,
             signature,
             address: accounts[0],
       };
       dispatch(setSignature(signature))
       const token = await dispatch(verify(verifyData)).unwrap();
       console.log(token,'token');
    };

    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);

    return (
        <button
            className='h-10 bg-primary-600 px-5 rounded-lg text-white font-bold hover:bg-primary-700 active:bg-primary-800 disabled:bg-secondary-200'
            onClick={handleConnect}
            disabled={isDisabled}
        >
            {text}
        </button>
    );
};

export default Connect;

import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import Web3 from 'web3';
import { setAccount, setAccountImage, setError, setSignature } from 'store/account/accountSlice';
import { fetchMessage, verify } from 'store/account/thunk';
import { accountSelector } from 'helpers/reduxSelectors';

import { VerifyType } from '../types';

type ConnectType = {
	text?: string;
};

const Connect: FC<ConnectType> = ({ text = 'Connect' }) => {
	const { address, loading } = useAppSelector(accountSelector);
	const dispatch = useAppDispatch();

	const chainChangedHandler = (): void => {
		window.location.reload();
	};

	const accountChangedHandler = (newAccount: any): void => {
		dispatch(setAccount(newAccount[0]));
	};

	const handleConnect = async () => {
		let accounts: string[] | undefined;
		if (!window.ethereum) {
			dispatch(setError('Please install mestamask!'));
			return;
		}

		const web3 = new Web3(window.ethereum);
		accounts = await web3.eth.getAccounts();
		if (!accounts.length) {
			accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
			accountChangedHandler(accounts);
		} else if (accounts[0] !== address) {
			accountChangedHandler(accounts);
		}
		if (accounts) {
			const accountImageURL = `https://www.gravatar.com/avatar/${web3.utils.sha3(
				accounts[0]
			)}?d=identicon`;
			dispatch(setAccountImage(accountImageURL));
			const message = await dispatch(fetchMessage()).unwrap();
			const signature = await web3.eth.personal.sign(message, accounts[0], 'test');
			const verifyData: VerifyType = {
				message,
				signature,
				address: accounts[0],
			};
			dispatch(setSignature(signature));
			await dispatch(verify(verifyData)).unwrap();
		}
	};

	window.ethereum?.on('accountsChanged', accountChangedHandler);
	window.ethereum?.on('chainChanged', chainChangedHandler);

	return (
		<button
			className='h-10 bg-primary-600 px-5 rounded-lg text-white font-bold hover:bg-primary-700 active:bg-primary-800 disabled:bg-secondary-200 disabled:text-secondary-500'
			onClick={handleConnect}
			disabled={loading}
		>
			{text}
		</button>
	);
};

export default Connect;

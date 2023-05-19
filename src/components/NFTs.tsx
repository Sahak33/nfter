import { FC, useEffect } from 'react';
import { fetchNFTs } from 'store/account/thunk';
import { accountSelector } from 'helpers/reduxSelectors';

import { useAppDispatch, useAppSelector } from '../hooks';
import Card from './Card';
import Empty from './Empty';

const NFTs: FC = () => {
	const { nfts } = useAppSelector(accountSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchNFTs());
	}, []);

	return (
		<div>
			{!nfts.length && <Empty />}
			{!!nfts.length && nfts.map((item: any, index: number) => <Card key={index} item={item} />)}
		</div>
	);
};

export default NFTs;

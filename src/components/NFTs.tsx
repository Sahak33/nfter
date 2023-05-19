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
			{!!nfts.length && (
				<div className='flex items-stretch sm:justify-center flex-wrap max-w-[1200px] xl:max-w-[957px] md:max-w-[702px] sm:max-w-[592px] xs:max-w-[272px] w-full mx-auto gap-y-3 mt-8'>
					{nfts.map((item: any, index: number) => (
						<Card key={index} item={item} />
					))}
				</div>
			)}
		</div>
	);
};

export default NFTs;

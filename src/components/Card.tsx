import { FC } from 'react';
import nft from 'assets/images/nft.jpg';

const Card: FC<any> = ({ item: { block_number, name, symbol, media } }) => {
	return (
		<div className='w-full max-w-[230px] sm:max-w-[290px] p-2 border border-secondary-300 hover:outline hover:outline-2 hover:outline-primary-400 rounded-xl mr-3 xs:mr-0 last:mr-0 xl:mr-[11px]'>
			<img
				src={media?.media_collection?.high?.url}
				alt='nft'
				className='rounded-lg mb-3 w-full h-full max-h-[214px] rounded-lg mb-3'
			/>
			<div className='ml-4 mb-4'>
				<div className='flex'>
					<p className='font-bold text-secondary-900 hover:text-primary-700 mb-1 cursor-pointer truncate transition-all duration-300'>
						{symbol} #${block_number}
					</p>
				</div>
				<div className='flex items-center'>
					<img
						src={media?.media_collection?.low?.url}
						alt='nft'
						className='w-5 h-5 rounded-md mr-2'
					/>
					<p className='font-bold text-primary-600 text-xs'>{name}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;

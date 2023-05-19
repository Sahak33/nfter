import {FC} from "react";
import nft from 'assets/images/nft.jpg'

const Card:FC = () => {
    return (
        <div className='max-w-[230px] p-2 border border-secondary-300 hover:outline hover:outline-2 hover:outline-primary-400 rounded-xl'>
            <img src={nft} alt='nft' className='rounded-lg mb-3'/>
            <div className='ml-4 mb-4'>
                <div className='flex'>
                    <p className='font-bold text-secondary-900 hover:text-primary-700 mb-1 cursor-pointer truncate transition-all duration-300'>WZRD #5555</p>
                </div>
                <div className='flex items-center'>
                    <img src={nft} alt='nft' className='w-5 h-5 rounded-md mr-2'/>
                    <p className='font-bold text-primary-600 text-xs'>WZRDS</p>
                </div>
            </div>
        </div>
    )
}

export default Card;

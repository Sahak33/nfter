import React from 'react';
import {ReactComponent as ErrorIcon } from "assets/icons/close.svg";

const Error = ({ message }: any) => {
  return (
    <div className='max-w-[328px] rounded-xl bg-red-50 py-3 px-6'>
      <div className='flex items-center font-bold text-red-600 mb-2'>
        <ErrorIcon className='w-6 h-6'/>
        <p className='ml-2.5 font-bold'>Error</p>
      </div>
      <p className='text-secondary-700 font-semibold leading-[22px] text-sm'>{message}</p>
    </div>
  );
};

export default Error;

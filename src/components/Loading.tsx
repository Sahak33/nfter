import React from 'react';
import { ReactComponent as CircleIcon } from "assets/icons/circle.svg";

const Loading = ({ description }: any) => {
  return (
    <div className='flex items-center'>
      <CircleIcon className="mr-3 h-5 w-5 animate-spin text-primary-900"/>
      <span className="font-bold text-secondary-900">{description}</span>
    </div>
  );
};

export default Loading;

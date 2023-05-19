import { FC, useState } from "react";
import Arrow from "assets/icons/arrow.svg";
import { ReactComponent as Frame14 } from "assets/icons/explore.svg";
import { ReactComponent as Frame15 } from "assets/icons/exit.svg";
import {useAppSelector} from "../hooks";
import {accountSelector} from "../helpers/reduxSelectors";

const Account: FC = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { address, avatar } = useAppSelector(accountSelector)

  const handleFormatAddress = (address: any) => {
    return address?.slice(0, 11)?.replace("a", "...");
  }

  const Onclick = () => {
    setToggle(false);
    // discount();
  };

  return (
    <div className="flex items-center justify-between w-[178px] h-10 border-solid border border-secondary-300 rounded-lg px-3 relative active:border-2 active:border-primary-400 active:bg-primary-50 sm:border-0">
      <div className="flex items-center mr-2" onClick={() => setToggle(!toggle)}>
        <img className="mr-2 h-5 w-5 cursor-pointer rounded-xl" src={avatar} alt="avatar" />
        <span className="text-sm leading-[22px] font-semibold text-secondary-700 cursor-pointer">{handleFormatAddress(address)}</span>
      </div>
      <div className="flex items-center border-l  border-secondary-300 h-3">
        <img className="ml-3 h-3 w-3 cursor-pointer" src={Arrow} alt="avatar" onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <div className="absolute top-[48px] right-0  w-[230px] bg-white rounded-xl box-shadow-light border-solid border border-secondary-300 pt-[16px] pb-[16px] xs:w-[320px] xs:rounded-none xs:top-[55px] xs:right-[-31px] xs:h-[124px]">
          <div onClick={() => setToggle(false)} className="group flex items-center h-[48px] w-full pl-6 hover:bg-secondary-200">
            <Frame14 className="w-3.5 h-3.5 text-secondary-700 group-hover:text-secondary-900" />
            <p className="ml-3 text-base leading-6 font-semibold text-secondary-700 cursor-pointer group-hover:text-secondary-900">
              View on Explorer
            </p>
          </div>
          <div onClick={Onclick} className="group flex items-center h-[48px] w-full  pl-6 hover:bg-secondary-200 ">
            <Frame15 className="w-3.5 h-3.5 text-secondary-700 group-hover:text-secondary-900" />
            <p className="ml-3 text-base leading-6 font-semibold text-secondary-700 cursor-pointer group-hover:text-secondary-900">
              Disconnect Wallet
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;

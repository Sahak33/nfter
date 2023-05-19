import {FC, useEffect} from 'react';
import { useAppDispatch, useAppSelector} from "../hooks";
import { fetchNFTs } from "store/account/thunk";
import { accountSelector } from "helpers/reduxSelectors";
import Empty from "./Empty";
import Card from "./Card";

const NFTs:FC = () => {
  const { nfts } = useAppSelector(accountSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNFTs());
  }, []);


  return (
    <div>
      {!nfts.length && <Empty />}
      {!!nfts.length && nfts.map((item: any) => (
        <Card />
      ))}
    </div>
  );
};

export default NFTs;

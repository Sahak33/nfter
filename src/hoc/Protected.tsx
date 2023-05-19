import React from 'react';
import useAuth from "hooks/useAuth";
import NFTs from 'components/NFTs';
import Welcome from "../components/Welcome";

const Protected = () => {
  const auth = useAuth();
  return auth ? <NFTs /> : <Welcome />;
};

export default Protected;

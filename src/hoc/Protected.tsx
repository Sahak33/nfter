import React from 'react';
import NFTs from 'components/NFTs';
import useAuth from 'hooks/useAuth';

import Welcome from '../components/Welcome';

const Protected = () => {
	const auth = useAuth();
	return auth ? <NFTs /> : <Welcome />;
};

export default Protected;

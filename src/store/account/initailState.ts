type InitialStateType = {
	loading: boolean;
	address: string;
	signature: string;
	message: string;
	token: string;
	nfts: any;
	avatar: string;
	isConnected: boolean;
	error: string | undefined;
};

const initialState: InitialStateType = {
	loading: false,
	address: '',
	signature: '',
	message: '',
	token: localStorage.getItem('token') || '',
	nfts: [],
	avatar: '',
	isConnected: false,
	error: '',
};

export default initialState;

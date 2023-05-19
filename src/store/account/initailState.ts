const initialState: any = {
    loading: false,
    address: '',
    signature: '',
    message: '',
    token: localStorage.getItem('token') || null,
    nfts: [],
    isConnected: false,
    isDisabled: false,
    error: '',
};

export default initialState;

import { createSlice } from '@reduxjs/toolkit';
import initialState from './initailState';

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
});

export default accountSlice.reducer;
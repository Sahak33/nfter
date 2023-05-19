import { createAsyncThunk } from '@reduxjs/toolkit';
import { VerifyType } from 'types';
import { getMessage } from 'services/message-service';
import { getNFTs } from 'services/nft-service';
import { verifySignature } from 'services/signature-service';

export const fetchMessage = createAsyncThunk<string, undefined, { rejectValue: string }>(
	'account/fetchMessage',
	async (_, { rejectWithValue }) =>
		getMessage()
			.then(({ data }) => data.message)
			.catch((e) => rejectWithValue(e))
);

export const verify = createAsyncThunk<string, VerifyType, { rejectValue: string }>(
	'account/verify',
	async (data, { rejectWithValue }) =>
		verifySignature(data)
			.then(({ data: { token } }) => {
				localStorage.setItem('token', token);
				return token;
			})
			.catch((e) => rejectWithValue(e))
);

export const fetchNFTs = createAsyncThunk<any, undefined, { rejectValue: string }>(
	'account/fetchNFTs',
	async (_, { rejectWithValue }) =>
		getNFTs()
			.then(({ data }) => data.result)
			.catch((e) => rejectWithValue(e))
);

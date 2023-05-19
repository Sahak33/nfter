import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMessage} from "services/message-service";
import {verifySignature} from "../../services/signature-service";
import {getNFTs} from "../../services/nft-service";

export const fetchMessage = createAsyncThunk('account/fetchMessage', async (_, {rejectWithValue}) => (
  getMessage()
    .then(({data}) => data.message)
    .catch(e => rejectWithValue(e)))
);

export const verify = createAsyncThunk<any, any, any>('account/verify', async (data, {rejectWithValue}) => (
  verifySignature(data)
    .then(({data: {token}}) => {
      localStorage.setItem('token', token);
      return token;
    })
    .catch(e => rejectWithValue(e)))
);

export const fetchNFTs = createAsyncThunk('account/fetchNFTs', async (_, {rejectWithValue}) => (
  getNFTs()
    .then(({data}) => data.result)
    .catch(e => rejectWithValue(e)))
);

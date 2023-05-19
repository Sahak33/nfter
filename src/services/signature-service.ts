import { VerifyType } from 'types';
import AxiosInstance from 'utils/Instance';

const URL = '/verify';

export const verifySignature = (body: VerifyType) => AxiosInstance.post(URL, body);

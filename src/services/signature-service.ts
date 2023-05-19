import AxiosInstance from 'utils/Instance';

const URL = '/verify'

export const verifySignature = (body: any) => AxiosInstance.post(URL, body);

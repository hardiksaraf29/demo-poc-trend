
import { RequestRegisterEmail } from '../types/requests';
import axios from './base.service';
export const registerEmail = (payload: RequestRegisterEmail) => axios.post(`/auth/subscriber`, payload);

import axios from 'axios';

export const API_BASE_URL = "https://businessapi.trendii.com";
export const contactUs = (payload: any) => axios.post(`${API_BASE_URL}/auth/contact-us`, payload);
export const getTerms = (data: {
    page_id: string;
  }) => axios.post(`${API_BASE_URL}/auth/terms`, data);
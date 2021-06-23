import axios from 'axios';

export const API_BASE_URL = "https://businessapi.trendii.com";

export const getNews = () => axios.post(`${API_BASE_URL}/auth/news`);
import axios from "axios";
export const API_BASE_URL = "https://businessapi.trendii.com";
// const BaseService = axios.create({
//     baseURL: process.env.REACT_APP_API_SERVER, // url = base url + request url
// });
export default axios.create({
    baseURL: API_BASE_URL,
});
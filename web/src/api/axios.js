import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_NETFLIX_API_URL,
    params: {
        api_key: process.env.REACT_APP_NETFLIX_API_KEY,
        language: 'ko-KR',
    },
});

export default instance;

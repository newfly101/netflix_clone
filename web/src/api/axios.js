import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NETFLIX_API_URL,
    params: {
        api_key: process.env.NETFLIX_API_KEY,
        language: 'ko-KR',
    },
});

export default instance;

import instance from "../api/axios";
import requests from "../api/request";

export const fetchNowPlaying = async () => {
    const response = await instance.get(requests.fetchNowPlaying);
    const randNum = Math.floor(Math.random() * response.data.results.length);
    const movieId = response.data.results[randNum].id;
    const {data: movieDetail} = await instance.get(requests.fetchMovieDetail(movieId), {
        params: {append_to_response: "videos"}
    });
    return movieDetail;
}
import {actionTypes} from "./actionTypes";

export const setMovieList = (movieList) => ({
    type: actionTypes.GET_MOVIE_LIST,
    payload: movieList,
});

export const setMovie = (movie) => ({
    type: actionTypes.GET_MOVIE,
    payload: movie,
});

export const setIsClicked = (isClicked) => ({
    type: actionTypes.GET_MOVIE_PLAYER,
    payload: isClicked,
});

export const setIsModalOpen = (isModalOpen) => ({
    type: actionTypes.GET_MOVIE_MODAL_OPEN,
    payload: isModalOpen,
});
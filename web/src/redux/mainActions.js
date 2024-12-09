import {actionTypes} from "./actionTypes";
import {fetchNowPlaying} from "../service/movieService";

export const setBannerMovie = (bannerMovie) => ({
    type: actionTypes.GET_BANNER_MOVIE,
    payload: bannerMovie,
});

export const setSelectedMovie = (selectedMovie) => ({
    type: actionTypes.GET_SELECTED_MOVIE,
    payload: selectedMovie,
});

export const setIsClicked = (isClicked) => ({
    type: actionTypes.GET_MOVIE_PLAYER,
    payload: isClicked,
});

export const setIsModalOpen = (isModalOpen) => ({
    type: actionTypes.GET_MOVIE_MODAL_OPEN,
    payload: isModalOpen,
});

export const getFetchBanner = () => async (dispatch) => {
    try {
        console.log("[THUNK] getFetchBanner 실행");
        const movie = await fetchNowPlaying();
        dispatch(setBannerMovie(movie));
    } catch (e) {
        console.log("[ERROR] loading banner movie", e);
    }
}
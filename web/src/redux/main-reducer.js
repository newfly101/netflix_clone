import {actionTypes} from "./actionTypes";


// 초기 state
const initialState = {
    bannerMovie: [],
    selectedMovie: [],
    isClicked: false,
    isModalOpen: false,
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BANNER_MOVIE:
            return { ...state, bannerMovie: action.payload };
        case actionTypes.GET_SELECTED_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case actionTypes.GET_MOVIE_PLAYER:
            return { ...state, isClicked: action.payload };
        case actionTypes.GET_MOVIE_MODAL_OPEN:
            return { ...state, isModalOpen: action.payload };
        default:
            return state;
    }
}

export default mainReducer;


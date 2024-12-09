import {actionTypes} from "./actionTypes";


// 초기 state
const initialState = {
    movieList: [],
    movie: [],
    isClicked: false,
    isModalOpen: false,
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_MOVIE_LIST:
            return { ...state, movieList: action.payload };
        case actionTypes.GET_MOVIE:
            return { ...state, movie: action.payload };
        case actionTypes.GET_MOVIE_PLAYER:
            return { ...state, isClicked: action.payload };
        case actionTypes.GET_MOVIE_MODAL_OPEN:
            return { ...state, isModalOpen: action.payload };
        default:
            return state;
    }
}

export default mainReducer;


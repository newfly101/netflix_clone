import {combineReducers, createStore} from "redux";
import mainReducer from "./main-reducer";

// store에 reducer 통합 (reducer가 추가되면 여기에 추가)
const rootReducer = combineReducers({
    movie: mainReducer,
})

// store 생성
// createStore() 은 redux-toolkit 이 나오고나서 더이상 사용되지 않음
// 사용할 수는 있으나, 권장되지 않음
const store = createStore(rootReducer);

export default store;
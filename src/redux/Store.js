import { combineReducers, createStore } from "redux";
import drawCharReducer from "./ducks/DrawCharacter";

const reducer = combineReducers({
    drawcharCount: drawCharReducer
});

const store = createStore(reducer);

export default store;
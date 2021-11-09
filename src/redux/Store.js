import { combineReducers, createStore } from "redux";
import drawCharReducer from "./ducks/DrawCharacter";
import choosenWordReducer from "./ducks/ChoosenWordReducer";

const reducer = combineReducers({
    drawcharCount: drawCharReducer,
    choword: choosenWordReducer
});

const store = createStore(reducer);

export default store;
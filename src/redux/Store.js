import { combineReducers, createStore } from "redux";
import choosenWordReducer from "./ducks/ChoosenWordReducer";

const reducer = combineReducers({
    choword: choosenWordReducer
});

const store = createStore(reducer);

export default store;
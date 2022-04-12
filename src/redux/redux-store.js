import {combineReducers, createStore} from "redux";
import globalReducer from "./global-reducer";

let reducers = combineReducers({
    todosListPage: globalReducer
})

let store = createStore(reducers)

window.store = store;
export default store;
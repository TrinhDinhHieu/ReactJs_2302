import { combineReducers } from "redux";
import { todoReducer } from "./reducers/reducerTodo";

const rootReducers = combineReducers({
    todo:todoReducer
})
export default rootReducers;
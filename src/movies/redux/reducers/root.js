/* eslint-disable no-undef */
import {combineReducers} from 'redux'
import { HomeReducer } from "./HomeReducer";
import { SearchReducer } from './SearchReducer';

const rootReducer = combineReducers({
    home: HomeReducer,
    search:SearchReducer,
})

export default rootReducer

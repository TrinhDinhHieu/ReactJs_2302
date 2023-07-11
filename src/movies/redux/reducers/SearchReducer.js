/* eslint-disable no-unused-vars */
//Reducwer sẽ nhận tham số state, action. 
//action là action của redux-saga 
import {SEARCH_MOVIE_FAIL, SEARCH_MOVIE_SUCCES, START_SEARCH_MOVIE } from "../actions/searchAction";
//khai báo state
const initstate = {
loading:false,
dataMovie: [],
error : null,
page:1,
totalPage: 0,
totalResult:0
}
export const SearchReducer = (state = initstate,action)=>{
    switch (action.type) {
        case START_SEARCH_MOVIE:
            return{
                ...state,
                loading: action.loading
            }
            case SEARCH_MOVIE_SUCCES:
                return{
                    ...state,
                    ...{
                        dataMovie: action.movies.results,//data của action Saga
                        error: null,
                        page: action.movies.page,
                        totalPage: action.movies.total_pages,
                        totalResult:action.movies.total_results
                    }
                }
                case SEARCH_MOVIE_FAIL:
                    return{
                        ...state,
                        error: action.error
                    }
        default:
            return state
    }
}
/* eslint-disable no-unused-vars */
//Reducwer sẽ nhận tham số state, action. 
//action là action của redux-saga 
import { LOADING_REQUEST_DATA,REQUEST_DATA_HOME_SECCESS,REQUEST_DATA_HOME_FAILURE } from "../actions/HomeAction"; // action của redux-saga
//khai báo state
const initstate = {
loading:false,
dataMovie: [],
error : null,
page:1,
totalPage: 0,
totalResult:0
}
export const HomeReducer = (state = initstate,action)=>{
    switch (action.type) {
        case LOADING_REQUEST_DATA:
            return{
                ...state,
                loading: action.loading
            }
            case REQUEST_DATA_HOME_SECCESS:
                return{
                    ...state,
                    ...{
                        dataMovie: action.dataMovie.results,//data của action Saga
                        error: null,
                        page: action.dataMovie.page,
                        totalPage: action.dataMovie.total_pages,
                        totalResult:action.dataMovie.total_results
                    }
                }
                case REQUEST_DATA_HOME_FAILURE:
                    return{
                        ...state,
                        error: action.error
                    }
        default:
            return state
    }
}
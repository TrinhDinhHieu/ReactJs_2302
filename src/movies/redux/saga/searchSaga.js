/* eslint-disable no-unused-vars */
import { call, put, throttle  } from "redux-saga/effects";
//call: call vào api, put: dispatch vào store, takeEvery: ktra xem có hđ nào dk gọi vào
// xử lí các side effect
import { helpers } from "../../helpers";
import { api } from "../../sevices/api";
import * as actions from "../actions/searchAction";
// import { REQUEST_DATA_HOME } from '../actions/HomeAction'//api yêu cầu lấy datahome về
// Saga = worker + watcher (lm và theo dõi) - theo dõi có hđ nào dk đẩy vào store ko, và xử lí nó trc khi đẩy vào
// redux-saga : pải triển khai bằng generate function*

// 1- worker
function* searchSaga({ keywork }) {
  // nhận tham số page
  //yield: chờ /đợi
  try {
    //báo hiệu bắt đầu call api
    //Saga sẽ dispatch action vào reducer trong store
    yield put(actions.statrMovie(true)); // đợi put loading: true vào dispatch store
    const dataMovie = yield call(api.getDataPopularMovies, keywork); // sau dấu phẩy là tham số truyền vào
    // call(tên hàm, tham số hàm)
    if (!helpers.isEmptyObject(dataMovie)) {
      //có data
      yield put(actions.searchMovieSucces(dataMovie));//call api 
    } else {
      // ko có data trả về
      yield put(
        actions.searchMovieFail({
          error: 404,
          mess: "not found data"
        })
      );
    }
  } catch (error) {
    yield put(
      actions.searchMovieFail({
        error: 500,
        mess: "not found data"
      })
    );
  } finally {
    //stop call data
    yield put(actions.statrMovie(false));
  }
}
/// 2 - watcher
export function* watchSearchSaga(){
    yield throttle (500,actions.SEARCH_BY_KEYWORK,searchSaga); // lắng nghe 2s sau, xem các actions có request data ko 
}
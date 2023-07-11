/* eslint-disable no-unused-vars */
import { call, put, takeEvery } from "redux-saga/effects";
//call: call vào api, put: dispatch vào store, takeEvery: ktra xem có hđ nào dk gọi vào
// xử lí các side effect
import { helpers } from "../../helpers";
import { api } from "../../sevices/api";
import * as actions from "../actions/HomeAction";
// import { REQUEST_DATA_HOME } from '../actions/HomeAction'//api yêu cầu lấy datahome về
// Saga = worker + watcher (lm và theo dõi) - theo dõi có hđ nào dk đẩy vào store ko, và xử lí nó trc khi đẩy vào
// redux-saga : pải triển khai bằng generate function*

// 1- worker
function* homeSaga({ page }) {
  // nhận tham số page
  //yield: chờ /đợi
  try {
    //báo hiệu bắt đầu call api
    //Saga sẽ dispatch action vào reducer trong store
    yield put(actions.loadingRequesData(true)); // đợi put loading: true vào dispatch store
    const dataMovie = yield call(api.getDataPopularMovies, page); // sau dấu phẩy là tham số truyền vào
    // call(tên hàm, tham số hàm)
    if (!helpers.isEmptyObject(dataMovie)) {
      //có data
      yield put(actions.getRequestDataHomeSuccess(dataMovie));//call api 
    } else {
      // ko có data trả về
      yield put(
        actions.requestDataHomeFailure({
          error: 404,
          mess: "not found data"
        })
      );
    }
  } catch (error) {
    yield put(
      actions.requestDataHomeFailure({
        error: 500,
        mess: "not found data"
      })
    );
  } finally {
    //stop call data
    yield put(actions.loadingRequesData(false));
  }
}
/// 2 - watcher
export function* watchHomeSaga(){
    yield takeEvery(actions.REQUEST_DATA_HOME,homeSaga); // lắng nghe xem các actions có request data ko 
}
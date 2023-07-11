import { watchHomeSaga } from "./homeSaga";
import { call, all } from "redux-saga/effects";
import { watchSearchSaga } from "./searchSaga";

export default function* rootSaga(){
    yield all([
        call(watchHomeSaga),
        call(watchSearchSaga)
        // call cac saga khac o day
    ]);
}
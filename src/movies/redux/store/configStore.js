/* eslint-disable no-unused-vars */
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import rootReducer from '../reducers/root'
import rootSaga from '../saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const configStore = () =>{
    const store = createStore(
        rootReducer,
        applyMiddleware(
            sagaMiddleware,
            logger
        )
    );
    sagaMiddleware.run(rootSaga);
    return store
}
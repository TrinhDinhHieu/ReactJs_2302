// gọp các reducer lại với nhau để có 1 Reducer cha 
// và để Reducer cha do Store quản lí

import { combineReducers } from 'redux' // 
import { counterReducer } from './counterReducer'


const rootReducer = combineReducers({
    counter: counterReducer,
    // sau này chính là tên mới của Reducer để lấy state ra
    // và trong Object có chứa nhiều Reducer con khác 

})
export default rootReducer;
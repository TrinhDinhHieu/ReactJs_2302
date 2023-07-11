// nơi đây định nghĩa logic cập nhật state của ứng dụng
// Reducer tiếp nhận State , action 

import { DECREMENT_COUNTER, INCREMENT_COUNTER } from "../actions/counters";

// khai báo state ban đầu
const initState = {
    count :0
}
export const counterReducer = (state = initState,action)=>{
    //action: action dk store nó gọi vào và chuyển đến reducer xử lý
    // state: gtrij ban đầu
    //bản chất: reducer sẽ cập nhật state (tạo ra state mới - ko làm thay đổi state cũ ban đầu)
    //reducer: return về 1 object
    switch (action.type) {
        case INCREMENT_COUNTER:
            return {
                ...state,//lấy gtri state cũ
                count: state.count + action.payload.val //action.payload.val: tham số truyền lên
            }
        case DECREMENT_COUNTER:
            return{
                ...state,
                count: state.count - action.payload.val
            }
        default:
            return state
}
}

// bản chất 1 Action sẽ có 1 Reducer . dể thực hiện nhiệm vụ khác nhau
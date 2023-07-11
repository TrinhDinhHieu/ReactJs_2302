/* eslint-disable no-unused-vars */
import { memo } from "react";
import { useSelector } from "react-redux"; // lấy dữ liêu state từ Store

function Result() {
    const selectCount = useSelector(state=> state.counter.count);
     // counter: tên của Rerducer con đã đượcthay đổi trong file root Reducer
     // state.counter : state nằm trong counter reducer
  return <h1>{selectCount}</h1>;
}

export default memo(Result);

/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { memo } from "react";
import { Button } from "antd";
import { useDispatch } from "react-redux"; //đẩy action vào Store
import { incrementCounter, decrementCounter } from "../actions/counters";

function ButtonCounter(props) {
  const { name } = props; //lấy tên của button ng đùng ấn
  const dispatch = useDispatch(); //tạo biến

  const changeCounter = () => {
    if (name === "increment") {
      //đẩy action vào store
      dispatch(incrementCounter(1)); // payload.val = 1
    } else if (name === "decrement") {
      dispatch(decrementCounter(1)); // payload.val = 1
    }
  };

  return ( 
    // onClick={()=> changeCounter()} : ko có ()=> thì khi render hàm sẽ chạy đầu tiên ra nên sẽ ko Click dk
    <Button type="primary" name={props.name} onClick={()=> changeCounter()}> 
      {props.children}
    </Button>
  );
}

export default memo(ButtonCounter);

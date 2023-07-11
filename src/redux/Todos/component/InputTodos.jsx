/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNameTodo } from "../actions/actions";

function InputTodos(props) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.nameTodo);

  const changeName = (name) => {
    // let name = even.target.value; // lấy gtri nhập từ ô input
    // name = name.trim(); //xóa khoảng trắng
    dispatch(changeNameTodo(name));
  };
  return (
    <>
    <input
      type={props.type}
      name={props.name}
      onChange={event =>changeName( event.target.value)}
      value={todos}
    />
   
    </>
  );
}

export default memo(InputTodos);

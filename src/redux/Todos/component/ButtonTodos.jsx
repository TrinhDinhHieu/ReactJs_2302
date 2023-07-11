/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos } from "../actions/actions";

function ButtonTodos(props) {
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todo.nameTodo);

  const addTodo = () => {
   todos = todos.trim()
    if (todos.length > 0) {
      dispatch(addTodos(todos));
    }
  };
  return (
    <button name="button" onClick={() => addTodo()}>
      {props.children}
    </button>
  );
}

export default memo(ButtonTodos);

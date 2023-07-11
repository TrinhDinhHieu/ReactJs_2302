/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";
import { finishItem, removeItem } from "../actions/actions";

function ListTodos() {
  const data = useSelector((state) => state.todo.listData);
  console.log(data);
  const dispatch = useDispatch();
  const removeItemById = (idTodo) => {
    dispatch(removeItem(idTodo));
  };
  const finishItemById = idTodo=>{
    dispatch(finishItem(idTodo))
  }
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index} >
          <input type="checkbox" onChange={()=>finishItemById(item.idTodo)} defaultChecked={item.done}/>
          <span style={item.done? {color:"red"} : null}>{item.nameTodo}</span>
          <button onClick={() => removeItemById(item.idTodo)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ListTodos;

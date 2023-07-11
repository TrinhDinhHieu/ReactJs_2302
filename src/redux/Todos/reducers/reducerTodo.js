/* eslint-disable no-case-declarations */
import { ADD_TODOS, CHANGE_NAME_TODO, FINISH_ITEM, REMOVE_ITEM } from "../actions/actions";

const initState = {
  nameTodo: '',
  listData: [],
  idTodo: 1
};
export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODOS:
      return {
        ...state,
        idTodo: state.idTodo + 1,
        listData: [
          ...state.listData,
          { nameTodo: action.nameTodo, idTodo: state.idTodo, done: false }
        ],
        nameTodo: ''
      };
      case CHANGE_NAME_TODO:
        return{
            ...state,
            nameTodo:action.key, // cap nhat lai name, ko cap nhat lai cai khac
        }
        case REMOVE_ITEM:
          const idItemTodo = action.id;
          const newData = state.listData.filter(item=>item.idTodo !== idItemTodo) //duyệt qua mảng lấy những tp  ko bằng với id đã click
          return{
            ...state,
            listData: newData
          }
          case FINISH_ITEM:
            const idItem = action.id;
            const data = state.listData.map(item=>{
              return item.idTodo === idItem ?{...item,done: !item.done} : item
            })
            return{
              ...state,
              listData:data
            }
    default:
      return state;
  }
};

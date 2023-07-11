export const ADD_TODOS = "ADD_TODOS";
export const addTodos = (nameTodo)=>({
    type:ADD_TODOS,
    nameTodo // nameTodo = payload
})
export const CHANGE_NAME_TODO = ' CHANGE_NAME_TODO';
export const changeNameTodo = (key)=>({
    type:CHANGE_NAME_TODO,
    key // key = payload
})

export const REMOVE_ITEM = "REMOVE_ITEM";
export const removeItem = (id)=>({
    type:REMOVE_ITEM,
    id
})

export const FINISH_ITEM = 'FINISH_ITEM';
export const finishItem = (id)=>({
    type: FINISH_ITEM,
    id
})
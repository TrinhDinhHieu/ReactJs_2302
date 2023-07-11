/* eslint-disable react-refresh/only-export-components */

import { memo } from "react";
import ButtonTodos from "../component/ButtonTodos";
import ListTodos from "../component/ListTodos";
import InputTodos from "../component/inputTodos";

const IndexList = ()=>{
    return(
        <>
        <InputTodos type = "text" name=" TODOS"/>
        <ButtonTodos>Add todos</ButtonTodos>
        <ListTodos/>
        </>
    )
}
export default memo(IndexList);
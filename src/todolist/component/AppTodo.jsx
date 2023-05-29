import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";
import { useState } from "react";
import { Typography } from "antd";

const { Text } = Typography;
function AppTodo() {
  //lưu value input vào state
  const [nameTodo, setNameTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const [idTodo, setIdTodo] = useState(1);
  const [update, setUpdate] = useState([]);
  // lưu công việc vào state
  const changeNameTodo = (event) => {
    const value = event.target.value;
    // check có nhập cv ko
    if (value.length >= 0) {
      setNameTodo(value);
    }
    console.log(value);
  };
  //thêm công việc
  const addTodo = (work = "") => {
    if (work.length > 0) {
      setIdTodo(idTodo + 1); // tạo mã cv ko trùng nhau
      setListTodo([
        ...listTodo, //lấy data cũ
        {
          //add thêm data mới vào
          id: idTodo,
          name: work,
          done: false
        }
      ]);
      setNameTodo(null); // xóa tên cv
    }
  };
  //xóa cv
  const removeItem = (id) => {
    console.log(id + "xóa cv");
    // xóa phần tử theo id
    const newWorks = listTodo.filter((item) => item.id !== id);
    if (newWorks !== undefined) {
      setListTodo(newWorks);
    }
    //   setListTodo((prev) => {
    //       if (id === idTodo) {
    //       return
    //       } else {
    //        return alert("Lỗi");
    //       }
    //     // cập nhật lại state
    //   });
  };

  // submit công việc
  const handerSubmit = (id, name) => {
    const newWorks = listTodo.map((item) => {
      return item.id === id ? { ...item, done: !item.done } : item;
    });
    if (newWorks !== undefined) {
      //
      setListTodo(newWorks);
    }
  };
  return (
    <>
      <AddTodo change={changeNameTodo} add={addTodo} value={nameTodo} />
      <ListTodo dataList={listTodo} remove={removeItem} submit={handerSubmit} />
    </>
  );
}
export default AppTodo;

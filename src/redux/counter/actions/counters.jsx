/* eslint-disable no-unused-vars */
// nơi chứa action
// Định nghĩa type(tên hđ)
//export để bên Reducer check xem tên ở dạng j
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// action (hành động)
//action = 1 hàm trả về 1 object
// đag tạo hàm return về object
export const incrementCounter = (val) => ({
  type: INCREMENT_COUNTER,
  payload: {val} // payload sẽ nhận vào tham số truyền vào (với nhiều tham số sẽ để trong Object, nếu có 1 tham số thì ko cần để trong Object)
});

export const decrementCounter = (val) => ({
    type: DECREMENT_COUNTER,
    payload: {val} // payload sẽ nhận vào tham số truyền vào
  });
  
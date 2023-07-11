import { createStore } from "redux";
import rootReducers from "./root";


//nơi chưa toàn bộ trạng thái của ứng dụng và dk lưu vao Store
const store = createStore(rootReducers);

export default store;

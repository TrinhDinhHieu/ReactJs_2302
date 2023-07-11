import { createStore } from "redux";
import rootReducer from "./reducers/root";


//nơi chưa toàn bộ trạng thái của ứng dụng và dk lưu vao Store
const store = createStore(rootReducer);

export default store;

import AppCounter from "./pages/appCounter";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    //Provider: sẽ cho phép các Component trong App lấy được dữ liệu trong Store và lưu trưc lại
    <Provider store={store}>
      <AppCounter />
    </Provider>
  );
}

export default App;

/* eslint-disable no-unused-vars */
import { Route, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import router from "./routes/Web";
import { Provider } from "react-redux";
import { configStore } from "./redux/store/configStore";

function Movies() {
  const store = configStore();
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default Movies;

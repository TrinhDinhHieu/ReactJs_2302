import { Route, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import router from "./routes/Web";

function Movies() {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
}

export default Movies;

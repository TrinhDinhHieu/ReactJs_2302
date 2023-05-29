import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinLoader from "../component/common/SpinLoader";

// sử dụng lazy để khi render các comp sẽ ko bị reload lâu
const Home = lazy(() => import("../pages/Home"));
const UpComing = lazy(() => import("../pages/UpComing"));
const Search = lazy(() => import("../pages/Search"));
const NotFound = lazy(() => import("../component/common/404"));
const Defail = lazy(()=> import('../pages/Defail'))
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      //sử dụng Suspense để khi chạy lầ đầu tiên sẽ loading component lần đầu tiên
      <Suspense fallback={<SpinLoader />}>
        {" "}
        <Home />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/upcoming",
    element: (
      <Suspense fallback={<SpinLoader />}>
        {" "}
        <UpComing />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={<SpinLoader />}>
        {" "}
        <Search />
      </Suspense>
    ),
    errorElement: <NotFound />
  },
  {
    ///movies/teenphim/1234
    path: "/movie/:slug/:id",//2 chấm là để nhận id tuef url
    element: (
      <Suspense fallback={<SpinLoader />}>
        {" "}
        <Defail />
      </Suspense>
    ),
    errorElement: <NotFound />
  }
]);
export default router;

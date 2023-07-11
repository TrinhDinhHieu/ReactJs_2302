import { createBrowserRouter, defer } from "react-router-dom";
import { lazy, Suspense } from "react";
import SpinLoader from "../component/common/SpinLoader";
import AuthLayoutMovies from "../component/Auth";
import PublicLayout from "../component/PublicLayout";
import ProtectedLayout from "../component/ProtectedLayout";
import { element } from "prop-types";

// sử dụng lazy để khi render các comp sẽ ko bị reload lâu
const Home = lazy(() => import("../pages/Home2"));
const UpComing = lazy(() => import("../pages/UpComing"));
const Search = lazy(() => import("../pages/Search"));
const NotFound = lazy(() => import("../component/common/404"));
const Defail = lazy(() => import("../pages/Defail"));
const Login = lazy(() => import("../pages/Login"));
const FavoirteMovies = lazy(() => import("../pages/Favoirte"));

//hàm lấy data ng dùng
const getUserData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = window.localStorage.getItem("reactjs2302-movie");
      resolve(user);
    }, 3000);
  });
};
const router = createBrowserRouter([
  {
    element: <AuthLayoutMovies />,
    loader: () => defer({ userPromise: getUserData() }),
    errorElement: <NotFound />,
    children: [
      {
        element: <PublicLayout />, //pubic
        errorElement: <NotFound />,
        children: [
          {
            path: "/",
            element: (
              //sử dụng Suspense để khi chạy lầ đầu tiên sẽ loading component lần đầu tiên
              <Suspense fallback={<SpinLoader />}>
                <Home />
              </Suspense>
            ),
            errorElement: <NotFound />
          },
          {
            path: "/upcoming",
            element: (
              <Suspense fallback={<SpinLoader />}>
                <UpComing />
              </Suspense>
            ),
            errorElement: <NotFound />
          },
          {
            path: "/search/:name",
            element: (
              <Suspense fallback={<SpinLoader />}>
                <Search />
              </Suspense>
            ),
            errorElement: <NotFound />
          },
          {
            ///movies/teenphim/1234
            path: "/movie/:slug/:id", //2 chấm là để nhận id tuef url
            element: (
              <Suspense fallback={<SpinLoader />}>
                <Defail />
              </Suspense>
            ),
            errorElement: <NotFound />
          },
          {
            ///movies/teenphim/1234
            path: "/login", //2 chấm là để nhận id tuef url
            element: (
              <Suspense fallback={<SpinLoader />}>
                <Login />
              </Suspense>
            ),
            errorElement: <NotFound />
          }
        ]
      },
      {
        element: <ProtectedLayout />,
        errorElement: <NotFound />,
        children: [
          {
            path: "/favoirte",
            element: (
              <Suspense fallback={<SpinLoader />}>
                <FavoirteMovies />
              </Suspense>
            )
          }
        ]
      }
    ]
  }
]);
export default router;

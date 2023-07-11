/* eslint-disable no-unused-vars */
import { Button, Input, Layout, AutoComplete, Menu, theme } from "antd";
import { memo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../../component/styles.css";
import { useAuth } from "../../hook/useAuth";
// import Inputsearch from "../Inputsearch";
import { useDispatch, useSelector } from "react-redux";
import * as reselect from "../../redux/reselect/SearchReselect";
import * as action from "../../redux/actions/searchAction";
import { createStructuredSelector } from "reselect";

const { Search } = Input;
const { Header } = Layout;

const searchResult = (query,loading) =>
  query.map((item) => {
    if(loading){
      return {
        label:<p>...loading</p>
      }
    }
      return {
        value: item.title,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <span>
             {item.title}
            </span>
          </div>
        )
      };
    });

function HeaderMovies() {
  const { pathname } = useLocation();
  const { user, logout } = useAuth();

  const navigate = useNavigate();
// search data
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch()
  const {loading, movies} = useSelector(createStructuredSelector({
    loading: reselect.getLoadingSearch,
    movies: reselect.getDataSearch
  }))
  const handleSearch = (value) => {
   if(value){
    dispatch(action.searchMovies(value))
   }
   setOptions( searchResult(movies,loading) )
  };
  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  const searchMovie = (nameMovie) => {
    nameMovie = nameMovie.trim();
    if (nameMovie.length > 0) {
      navigate(`/search?${encodeURIComponent(nameMovie)}`);
    }
  };
  //data movies
  let itemMovies = [
    { label: <NavLink to="/">Trang chủ</NavLink>, key: "/" },
    {
      label: <NavLink to="/upcoming">Phim sắp trình chiếu</NavLink>,
      key: "/upcoming"
    },
    // { label: <NavLink to="/search">Tìm kiếm</NavLink>, key: "/search" },

    {
      label: <NavLink to="/favoirte">Phim Yêu thích</NavLink>,
      key: "/favoirte"
    },
    {
      label: (
        // <Search
        // enterButton
        // placeholder="Enter search movie"
        // onSearch={key=>searchMovie(key)}

        //   style={{ textAlign: "center", width: "400px", marginTop: "20px" }}
        // />
        <AutoComplete
          dropdownMatchSelectWidth={252}
          style={{
            width: 300
          }}
          options={options}
          onSelect={onSelect}
          onSearch={handleSearch}
        >
          <Search size="large" placeholder="input here" enterButton />
        </AutoComplete>
      ),
      key: "/search"
    }
  ];

  if (user) {
    itemMovies = [
      ...itemMovies,
      {
        label: `${user.firstName} ${user.lastName}`
      },
      {
        label: <Button onClick={() => logout()}>Đăng xuất</Button>
      }
    ];
  } else
    itemMovies = [
      ...itemMovies,
      {
        label: <NavLink to="/login">Đăng nhập</NavLink>,
        key: "/login"
      }
    ];


  return (
    <Header className="header">
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={pathname} //trang chủ lm mặc định
        items={itemMovies}
        style={{
          fontSize: "18px",
          width: "100%",
          fontWeight: "500"
        }}
      />
    </Header>
  );
}

export default memo(HeaderMovies);

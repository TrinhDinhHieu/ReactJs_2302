import { Layout, Menu, theme } from "antd";
import { memo } from "react";
import { NavLink, useLocation } from "react-router-dom";

const { Header } = Layout;

function HeaderMovies() {
  const itemMovies = [
    { label: <NavLink to="/">Trang chủ</NavLink>, key: "/" },
    {
      label: <NavLink to="/upcoming">Phim sắp trình chiếu</NavLink>,
      key: "/upcoming"
    },
    { label: <NavLink to="/search">Tìm kiếm</NavLink>, key: "/search" }
  ];
  const { pathname } = useLocation();

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={pathname} //trang chủ lm mặc định
        items={itemMovies}
        style={{ fontSize: "18px", width: "500px", fontWeight:'500' }}
      />
    </Header>
  );
}

export default memo(HeaderMovies);

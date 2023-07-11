/* eslint-disable no-unused-vars */
import { Col, Row, Skeleton } from "antd";
import { memo, useEffect, useState } from "react";
import LayoutMovies from "../component/Layout";
import { useSelector, useDispatch } from "react-redux";
import { getRequestDataHome } from "../redux/actions/HomeAction";
import * as reselect from "../redux/reselect/HomeReselect";
import { createStructuredSelector } from "reselect";
import ListMovies from "../component/ListMovies";
import Pagination from "../component/Pagination";

function HomeComponent() {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { loading, movies, totalPage, totalResult } = useSelector(
    createStructuredSelector({
      // lấy dữ liệu từ Reselect 
      loading: reselect.getLoadingDataHome,
      movies: reselect.getDataHomePage,
      totalPage: reselect.getTotalPage,
      totalResult: reselect.getTotalResult
    })
  );

  useEffect(() => {
    dispatch(getRequestDataHome(page));
  }, [dispatch, page]);

  const changePageMovies = (p) => {
    if (p >= 1 && p <= totalPage) {
      //cập nhật lại state page
      //p : số trg ng dùng cập nhật lại
      setPage(p);
    }
  };

  if(loading){
    <LayoutMovies level1="Trang chu" level2="Danh sach" level3="Phim xem nhieu">
      <Row>
        <Col span={24}>
          <Skeleton active/>
        </Col>
      </Row>
    </LayoutMovies>
  }
  return (
    <LayoutMovies level1="Trang chu" level2="Danh sach" level3="Phim xem nhieu">
      <Row>
        <Col span={24}>
          <ListMovies movies= {movies}/>
          {movies.length > 0 && <Pagination
          current={page}
          total={totalResult}
          changePage={changePageMovies}
          />}
        </Col>
      </Row>
    </LayoutMovies>
  );
}

export default memo(HomeComponent);

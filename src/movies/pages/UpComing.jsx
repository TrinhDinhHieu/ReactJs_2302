import { Col, Row, Skeleton } from "antd";
import LayoutMovies from "../component/Layout";
import { memo, useEffect, useState } from "react";
import { api } from "../sevices/api";
import { helpers } from "../helpers/index";
import ListMovies from "../component/ListMovies";
import Pagination from "../component/Pagination";

function UpCommingComponent() {
  const [loading, setLoading] = useState(true); //vào trang loading luôn
  const [popularMovies, setPopularMovies] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [totalResult, setTotalResult] = useState(0);
  let checking = false;

  useEffect(() => {
    // call 1 lan sau khi render
    const getData = async () => {
      setLoading(true);
      const dataMovies = await api.UpCommingMovie(page);
      if (helpers.isEmptyObject(dataMovies)) {
        // ko co du lieu
        setError({
          cod: 404,
          mess: "Not found data"
        });
      } else {
        // co du lieu
        setPopularMovies(dataMovies["results"]);
        //ko cập nhật 2 state khi page thay đổi
        if (page === 1 && checking) {
          setTotalPage(dataMovies["total_pages"]);
          setTotalResult(dataMovies["total_results"]);
        }
       
        setError(null);
      }
      setLoading(false); // hoan thanh
    };
    getData();
    //clean up
    return () => {
      checking = true
    }
  }, [page]); //khi page thay đổi useEffect tự động render lại

  const changePageMovies = (p) => {
    if (p >= 1 && p <= totalPage) {
      //cập nhật lại state page
      //p : số trg ng dùng cập nhật lại
      setPage(p);
    }
  };

  if (loading) {
    return (
      <LayoutMovies
        level1="Trang chủ"
        level2="Danh sách"
        level3="Phim sắp chiếu"
      >
        <Row>
          <Col span={24}>
            <Skeleton active />
          </Col>
        </Row>
      </LayoutMovies>
    );
  }
  return (
    <LayoutMovies level1="Trang chủ" level2="Danh sách" level3="Phim sắp chiếu">
      <Row>
        <Col span={24}>
          <ListMovies movies={popularMovies} showDate={true} />
          {popularMovies.length > 0 && (
            <Pagination
              current={page}
              total={totalResult}
              //  pageSize={20}
              changePage={changePageMovies}
            />
          )}
        </Col>
      </Row>
    </LayoutMovies>
  );
}

export default memo(UpCommingComponent);

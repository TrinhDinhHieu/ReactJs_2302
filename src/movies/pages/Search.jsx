import React, { useState, useEffect, memo } from "react";
import { Row, Col, Skeleton } from "antd";
import { api } from "../sevices/api";
import ListMovies from "../component/ListMovies";
import LayoutMovies from "../component/Layout";
import Inputsearch from "../component/Inputsearch";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (name.trim().length > 0) {
        // ktra khi có nhập input
        // nguoi dung thuc su nhap tu khoa
        setLoading(true);
        // setShow(false);
        const dataMovies = await api.searchMovieByName(name);
        console.log(dataMovies);
        if (dataMovies.hasOwnProperty("results")) {
          // co data
          setMovies(dataMovies.results);
          // setShow(true);
        }
        setLoading(false);
      }
    };
    fetchData();
  }, [name]);

  const onSearchMovie = (nameItem) => {
    setName(nameItem);
  };
  if (loading) {
    return (
      <LayoutMovies level1="Trang chủ" level2="Danh sách" level3="Tìm kiếm">
        <Row>
          <Col span={24}>
            <Skeleton active />
          </Col>
        </Row>
      </LayoutMovies>
    );
  }
  return (
    <LayoutMovies level1="Trang chủ" level2="Danh sách" level3="Tìm kiếm">
      <Row>
        <Col span={20} offset={2}>
          <Inputsearch loading={loading} search={onSearchMovie} />
          <ListMovies movies={movies} />
          {/* Map  */}
          {/* <iframe
            title="New York"
            width="342"
            height="306"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
            scrolling="no"
          ></iframe> */}
          
        </Col>
      </Row>
    </LayoutMovies>
  );
};

export default memo(Search);

import React, { useState, useEffect, memo } from "react";
import { Row, Col, Skeleton } from "antd";
import { api } from "../sevices/api";
import ListMovies from "../component/ListMovies";
import LayoutMovies from "../component/Layout";
// import Inputsearch from "../component/Inputsearch";
import { useParams } from "react-router-dom";
const Search = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  // const [show, setShow] = useState(false);
  // const [name, setName] = useState("");
const {nameMovie} = useParams();
console.log(nameMovie);
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

  // const onSearchMovie = (nameItem) => {
  //   setName(nameItem);
  // };
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
    <LayoutMovies level1="Trang chủ" level2="Danh sách" level3="`Tìm kiếm phim : ${name}`">
      <Row>
        <Col span={20} offset={2}>
          {/* <Inputsearch loading={loading} search={onSearchMovie} /> */}
          <ListMovies movies={movies} />
          {/* Map  */}   
        </Col>
      </Row>
    </LayoutMovies>
  );
};

export default memo(Search);

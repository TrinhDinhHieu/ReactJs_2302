import React from "react";
import "./styles.css";
import { StarFilled } from '@ant-design/icons';
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
const { Meta } = Card;

const ListMovies = (props) => {
  // if (!props.show) {
  //     return null
  // }
  // Function to format the release date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-based
    const year = date.getFullYear();

    // Format the date as dd/mm/yyyy
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };
  return (
    <Row className="wrapper">
      {props.movies.map((item, index) => (
        <Col span={6} key={index}>
          <Link to={`/movie/${slugify(item.title)}/${item.id}`}>
            <Card
              hoverable
              style={{
                width: 260,
                marginBottom: "20px"
              }}
              cover={
                <img
                  alt={item.original_title}
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                />
              }
            >
              <Meta title={item.title} style={{fontSize:'16px', }}/>
              <h4> Đánh giá: {item.vote_average} / 12 <StarFilled style={{color:'yellow',marginBottom:'2px'}} /></h4>
              <h3>Lượt xem: {item.popularity}</h3>
              {props.showDate && (
                <h3 style={{ fontSize: "16px", marginTop: "10px" }}>
                  Ngày chiếu : {formatDate(item.release_date)}
                </h3>
              )}
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
export default React.memo(ListMovies);

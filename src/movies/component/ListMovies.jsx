import React from "react";
import { Row, Col, Card } from "antd";
import { Link } from "react-router-dom";
import slugify from "react-slugify";
const { Meta } = Card;

const ListMovies = (props) => {
  // if (!props.show) {
  //     return null
  // }

  return (
    <Row>
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
              <Meta title={item.title} />
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};
export default React.memo(ListMovies);

import { Col, Row } from "antd";
import LayoutMovies from "../component/Layout";
import { memo } from "react";

function SearchComponent() {
  return (
    <LayoutMovies level1="Trang chủ" level2="Danh sách" level3="Phim xem nhiều">
      <Row>
        <Col span={24} >
          <h2>This is Search</h2>
        </Col>
      </Row>
    </LayoutMovies>
  );
}

export default memo(SearchComponent);

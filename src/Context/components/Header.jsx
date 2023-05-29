import { memo } from "react";
import { Col, Row } from "antd";
import Switch from "./Switch";
function HeaderComponent() {
  return (
    <Row>
      <Col span={24}>
        <Row>
          <Col span={8}>
            <Switch />
          </Col>
        </Row>
        <Row>
          <Col span={16}>
            <h1> this header</h1>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default memo(HeaderComponent);

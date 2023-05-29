import { Col, Row } from "antd";
import { memo, useContext } from "react";
import ChangeContext from "../share/context";

function LayoutComponent({ children,className }) {
    const {bgColor} = useContext(ChangeContext);
    
  return (
    <Row className={bgColor}>
      <Col span={20} offset={2}>
        {children}
      </Col>
    </Row>
  );
}

export default memo(LayoutComponent);

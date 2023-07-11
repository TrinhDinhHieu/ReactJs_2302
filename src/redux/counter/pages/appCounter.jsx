import { memo } from "react";
import { Col, Row } from "antd";
import Result from "../component/Result";
import ButtonCounter from "../component/buttonCounter";

function AppCounter() {
    return ( 
        <Row>
            <Col span={12} offset={6}>
                <Result/>
                <ButtonCounter name = "increment">+</ButtonCounter>
                <ButtonCounter name = "decrement">-</ButtonCounter>

            </Col>
        </Row>
     );
}

export default memo(AppCounter);
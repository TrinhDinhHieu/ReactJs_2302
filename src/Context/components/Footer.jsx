import { Col, Row } from "antd";
import { memo, useContext } from "react";
import ChangeContext from "../share/context";

function FooterComponent() {
    const {color} = useContext(ChangeContext)
    return ( 
        <Row>
            <Col span={24}>
                <p className={color}> this is Footer</p>
            </Col>
        </Row>
     );
}

export default memo(FooterComponent);
/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { Row, Col } from 'antd'
import { contextWeather } from "../Context";

const ListData = () => {
    const { weathers} = useContext(contextWeather)
    return (
        <>
            <Row>
                <Col span={20} offset={2}>
                
                </Col>
            </Row>
        </>
    )
}
export default React.memo(ListData)
import React from "react";
import { Row, Col } from "antd";
import SearchWeather from './component/Search'
import ListData from './component/ListData'
import WeatherProvider from "./Provider";

export default React.memo(function AppWeather() {
    return (
        <Row>
            <Col span={24}>
                <WeatherProvider>
                    <SearchWeather/>
                    <ListData/>
                </WeatherProvider>
            </Col>
        </Row>
    )
})
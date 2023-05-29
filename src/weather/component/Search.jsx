/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { Row, Col, Input } from "antd";
import { contextWeather } from "../Context";
import './search.css'
const { Search } = Input;

const SearchWeather = () => {
  const {loading, weathers, getDataWeather } = useContext(contextWeather);
  return (
    <>
      <Row style={{ margin: "20px 0px" }}>
        <Col span={12} offset={6}>
          <Search
            placeholder="name's city"
            allowClear
            enterButton
            loading={loading}
            onSearch={(city) => getDataWeather(city.toLowerCase())}//city = event.target.value
          />
          {loading && <p>Loading ...</p>}
          {/* Khi dữ liệu thời tiết và nhiệt độ được trả về (weatherData.weather và weatherData.main tồn tại),
           chúng ta hiển thị thông tin về mô tả thời tiết và nhiệt độ lên giao diện. */}
          {weathers.weather && weathers.main && (
            <div>
              <p>Thời tiết: {weathers.weather[0].description}</p>
              <p>Nhiệt độ: {weathers.main.temp}°C</p>
              <p> Nhiệt độ min :{weathers.main.temp_min}</p>
            </div>
          )}
        </Col>
      </Row>
    </>
  );
};
export default React.memo(SearchWeather);

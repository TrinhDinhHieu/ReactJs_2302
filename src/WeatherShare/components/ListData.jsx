import { Col, Row } from "antd";
import { memo } from "react";
import { Menu } from "antd";
import { useState,useContext } from "react";
import { contextWeather } from "../context/Context";

function ListData() {
  const [current, setCurrent] = useState("mail");
  const { loading, weathers } = useContext(contextWeather)
  console.log(weathers.description);
  const onClick = (e) => {

    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Row>
      <Col span={20} offset={2}>
        <h1>List data</h1>
       

        
      </Col>
    </Row>
  );
}

export default memo(ListData);

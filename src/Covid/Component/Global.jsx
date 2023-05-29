import { Card, Col, Row } from "antd";
import { NumericFormat } from "react-number-format";

function Global({ global }) {
  return (
    <Row style={{ margin: "20px 0px" }}>
      <Col span={8}>
        <Card title="Confirmed">
          <p>
            NewConfirmed :
            <NumericFormat
              value={global.NewConfirmed}
              allowLeadingZeros
              thousandSeparator=","
              displayType="text"
            />
            
          </p>
          <p>TotalConfirmed : {global.TotalConfirmed}</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Deaths">
          <p>NewDeaths : {global.NewDeaths}</p>
          <p>TotalDeaths : {global.TotalDeaths}</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Recovered">
          <p>NewRecovered : {global.NewRecovered}</p>
          <p>TotalRecovered : {global.TotalRecovered}</p>
        </Card>
      </Col>
    </Row>
  );
}

export default Global;

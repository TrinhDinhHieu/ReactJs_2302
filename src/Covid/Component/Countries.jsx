import { Row, Col, Table } from "antd";


function Countries({ countries }) {
  const columns = [
    {
      title: "Country",
      dataIndex: "Country",
      key: "CountryCode"
    },
    {
      title: "CountryCode",
      dataIndex: "CountryCode",
      key: "CountryCode"
    },
    {
      title: "New Confirmed",
      dataIndex: "NewConfirmed",
      key: "CountryCode",
      // render: (text) => <NumericFormat
      //     value={text}
      //     allowLeadingZeros
      //     thousandSeparator=","
      //     displayType="text"
      //   />
      
    },
    {
      title: "Total Confirmed",
      dataIndex: "TotalConfirmed",
      key: "CountryCode"
    },
    {
      title: "New Deaths",
      dataIndex: "NewDeaths",
      key: "CountryCode"
    },
    {
      title: "Total Deaths",
      dataIndex: "TotalDeaths",
      key: "CountryCode"
    },
    {
      title: "New Recovered",
      dataIndex: "NewRecovered",
      key: "CountryCode"
    },
    {
      title: "Total Recovered",
      dataIndex: "TotalRecovered",
      key: "CountryCode"
    }
  ];

  return (
    <Row style={{ marginBottom: "30px" }}>
      <Col span={24}>
        <Table
          columns={columns}
          dataSource={countries}
          rowKey="ID" // id để phân loại
          
        />
      </Col>
    </Row>
  );
}

export default Countries;

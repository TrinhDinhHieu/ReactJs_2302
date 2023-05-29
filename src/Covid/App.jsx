import { useEffect, useState } from "react";
import { Col, Row, Skeleton } from "antd";
import Countries from "./Component/Countries";
import Global from "./Component/Global";
import { api } from "./services/api";

function AppCorona() {
  const [loading, setLoading] = useState(false); // vào trang loading data luôn
  const [virusGlobal, setVirusGlobal] = useState({});
  const [virusCountries, setVirusCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setError(false); 
      // call api
      const data = await api.GetDataVirusCorona();
      //
      if (data.hasOwnProperty("Global") && data.hasOwnProperty("Countries")) {
        //hasOwnProperty trả về một giá trị boolean cho biết liệu đối tượng mà bạn đang gọi nó có thuộc tính với tên của đối số hay không
        //co data
        setVirusGlobal(data["Global"]);
        setVirusCountries(data["Countries"]);
        setError(null);
      } else {
        //khong co data
        setError({ code: 500, mess: "not found data" });
      }
      setLoading(false); //call xog data api
    };
    getData(); // chay ham getData
  }, []);

  if (loading) {
    return (
      <Row>
        <Col span={20} offset={2}>
          <Skeleton active />
        </Col>
      </Row>
    );
  }
  return (
    <Row>
      <Col span={20} offset={2}>
        <Global global={virusGlobal} />
        <Countries countries={virusCountries} />
      </Col>
    </Row>
  );
}

export default AppCorona;

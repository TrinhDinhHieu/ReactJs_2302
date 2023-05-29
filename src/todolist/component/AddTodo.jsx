import { Row, Col, Input, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';

export default function AddTodo(prop) {
  const { Title } = Typography;
  const { Search } = Input;

  
  return (
    <Row style={{ margin: "20px 0" }}>
      <Col span={24}>
        <Title
          level={2} //Set content importance. Match with h1, h2, h3, h4, h5
        >
          Todo !
        </Title>
        <Search
          placeholder="Name ..."
        //   onSearch={() => console.log(" all")}
          enterButton={<PlusOutlined />} // name buttonsearch là icon
          //suffix={<PlusOutlined />} // thêm icon vào trong input search
          onChange={prop.change}
          allowClear ={true} // cho phép xóa 
          onSearch = {val => prop.add(val)}
          value = {prop.value}
        />
      </Col>
    </Row>
  );
}

AddTodo.properTypes={
  //isRequired : bắt buộc pải truyền vào, khi có hành động ép n vào 1 function
  change: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  value: PropTypes.string,
}
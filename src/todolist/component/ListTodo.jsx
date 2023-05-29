import { Row, Col, List, Checkbox, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import PropTypes from 'prop-types';

export default function ListTodo(prop) {
  return (
    <Row>
      {/* span =24 là chiều dài rộng 100% 
          offset = .. là đẩy cách lề trái sang phải
      */}
      <Col span={12} offset={6}>
        <List // giống FlatList trong React native
          itemLayout="horizontal" // bố cục theo phương ngang/dọc (horizontal/vertical)
          dataSource={prop.dataList} // lấy data từ input save
          renderItem={(item, index) => (
            //map ra danh sách công việc
            <List.Item key={index}>
              <List.Item.Meta
                avatar={
                  <Checkbox
                    onChange={() => prop.submit(item.id)} // () => để có click mới chạy
                    checked={item.done}
                    // onClick={() => {
                    //   prop.submit(item.id);
                    // }}
                  />
                }
                title={
                  // submit se gach ngang chu
                  <span
                    style={
                      item.done
                        ? { color: "red", textDecoration: "line-through" }
                        : null
                    }
                  >
                    {item.name}
                  </span>
                }
              />
              <div>
                <DeleteOutlined
                  onClick={() => {
                    prop.remove(item.id);
                  }}
                />
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}
// hoàn thành cv sẽ gạch ngang textl
ListTodo.propTypes = {
  dataList: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};
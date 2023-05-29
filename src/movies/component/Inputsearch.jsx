import React from "react";
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchMovies = (props) => {
    return (
        <Row style={{ margin: '15px 0px 40px 0px',  }}>
            <Col span={12} offset={6}>
                <Search
                    placeholder="name of movie ..."
                    enterButton
                    allowClear
                    loading={props.loading}
                    onSearch={value => props.search(value)}
                    style={{ height:'40px'}}
                />
            </Col>
        </Row>
    )
}
export default React.memo(SearchMovies);
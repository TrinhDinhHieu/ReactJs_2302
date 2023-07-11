import React from "react";
import { Row, Col, Input } from 'antd';

const { Search } = Input;

const SearchMovies = (props) => {
    return (
                <Search
                    placeholder="name of movie ..."
                    enterButton
                    allowClear
                    loading={props.loading}
                    // onSearch={value => props.search(value)}
                    onSearch={props.onSearch}
                    style={{ height:'40px',width:'400px',marginTop:'15px'}}
                />
           
    )
}
export default React.memo(SearchMovies);
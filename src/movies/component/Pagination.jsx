import { Pagination } from "antd";
import { memo } from "react";
const PaginationMovies = ({ current, total, changePage }) => (
  <Pagination
    current={current}
    pageSize={20} //tổng size/1 page
    total={total}
    showSizeChanger={false} 
    onChange={p =>changePage(p)}  
  />
);
export default memo(PaginationMovies);

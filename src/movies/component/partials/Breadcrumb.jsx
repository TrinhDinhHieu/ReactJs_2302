import { memo } from "react";
import { Breadcrumb, } from 'antd';

function BreadcrumMovies(props) {
    return (  
        <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item>{props.level1}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.level2}</Breadcrumb.Item>
        <Breadcrumb.Item>{props.level3}</Breadcrumb.Item>
      </Breadcrumb>
    );
}

export default memo(BreadcrumMovies);
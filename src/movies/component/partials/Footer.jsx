import { Layout} from 'antd';
import { memo } from 'react';

const { Footer } = Layout;

function FooterMovies() {

    return ( 
        <Footer
        style={{
          textAlign: 'center',
        }}
      >
       Movies 2023 phim tổng hợp
      </Footer>
     );
}

export default memo(FooterMovies);
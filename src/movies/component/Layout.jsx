import ContentMovies from './partials/Content'
import FooterMovies from "./partials/Footer";
import HeaderMovies from "./partials/Header";
import { Layout } from "antd";
function LayoutMovies(props ) {
  return (
    <Layout>
      <HeaderMovies />
      <ContentMovies
        level1={props.level1}
        level2={props.level2}
        level3={props.level3}
      >
        {props.children}
      </ContentMovies>
      <FooterMovies />
    </Layout>
  );
}

export default LayoutMovies;

import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Provider from "./share/provider"; // Provider sẽ chuyền tất cả dữ liệu mà n nhận dk và truyền đến tk ComPonent trong nó
import "./styles/App.css";

function AppContext() {
  return (
    <Provider>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </Provider>
  );
}

export default AppContext;

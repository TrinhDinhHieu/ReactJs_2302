//tạo caomponent share data từ hook
import { Suspense } from "react";
import { useLoaderData, useOutlet, Await } from "react-router-dom";
import { Row, Col, Alert } from "antd";
import { AuthProvider } from "../hook/useAuth";
import SpinLoader from "./common/SpinLoader";

const AlertError = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Alert message="Error !!" type="error" />
      </Col>
    </Row>
  );
};

const AuthLayoutMovies = () => {
  const outlet = useOutlet(); //check xem comp xem có ở comp khác ko
  const { userPromise } = useLoaderData();
  return (
    <Suspense fallback={SpinLoader}>
      <Await
        resolve={userPromise} // đợi để xly
        errorElement={<AlertError />}
        children={(user) => (
          <AuthProvider userData={user}>{outlet}</AuthProvider>
        )}
      />
    </Suspense>
  );
};
export default AuthLayoutMovies;
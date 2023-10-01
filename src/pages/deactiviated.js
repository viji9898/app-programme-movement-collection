import { Col, Row } from "antd";

export const Deactivated = () => {
  return (
    <div className="main">
      <Row gutter={[18, 18]}>
        <Col span={24}>
          <small>
            <p>expired</p>
          </small>
        </Col>
      </Row>
    </div>
  );
};

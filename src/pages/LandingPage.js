import { Col, Row } from "antd";
import { Hero } from "../components/landingPage/hero";

import { DynamicMetaTags } from "../utils/dynamicMetaTags";
import { FaunaBd } from "../components/landingPage/faunaDb";

export const LandingPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f4f1ed",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <DynamicMetaTags ogTitle={`starter-app`} ogImage={""} />
      <Row style={{ maxWidth: "900px", height: "70vh" }}>
        <Hero />
        <Col style={{ textAlign: "center" }} span={24}>
          <h2>{"Test Envirnoment"}</h2>
          <p>Event: testing commits from mac mini 2014</p>
          <FaunaBd />
        </Col>
      </Row>
    </div>
  );
};

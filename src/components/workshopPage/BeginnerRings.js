import { Card, Col, Divider, Row } from "antd";
import { WorkOutTable } from "../workshop/workoutTable";
import { WorkOutCard } from "../workshop/workoutCard";
import { beginnerRingsData } from "../workshopData/beginnerRingsData";

export const BeginnerRings = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row gutter={[18, 18]} style={{ maxWidth: "1200px" }}>
        <Col span={24}>
          <Divider />
          <div className="mainFont" style={{ padding: "0px 10px 0px 10px" }}>
            <p>
              The Beginner Wokshop focuses on fundamental to build your strenght
              and prepares you to take on more challanging progressions.{" "}
              <br></br>
              <br></br>
              <strong>{" How to use: "}</strong>
              Follow the routine as laid out, excercise 1a to 1f our part of a
              cicuirt and should be done one after the other same with 5a-5b and
              6a-6b.
            </p>
          </div>
          <Card title="Beginner Workshop">
            <WorkOutTable workShopData={beginnerRingsData} />
          </Card>
        </Col>
        <WorkOutCard workShopData={beginnerRingsData} />
        <Divider />
      </Row>
    </div>
  );
};

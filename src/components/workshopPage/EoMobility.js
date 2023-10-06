import { Card, Col, Divider, Row } from "antd";
import { WorkOutTable } from "../workshop/workoutTable";
import { WorkOutCard } from "../workshop/workoutCard";
import { eoMobilityData } from "../workshopData/eoMobilityData";

export const EoMobility = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row gutter={[18, 18]} style={{ maxWidth: "1200px" }}>
        <Col span={24}>
          <Divider />
          <div className="mainFont" style={{ padding: "0px 10px 0px 10px" }}>
            <p>
              The EO Wokshop focuses on fundamental to build your strenght and
              prepares you to take on more challanging progressions. <br></br>
              <br></br>
              <strong>{" How to use: "}</strong>
              Follow the routine as laid out, excercise 1a to 1f our part of a
              cicuirt and should be done one after the other same with 5a-5b and
              6a-6b.
            </p>
          </div>
          <div>
            <iframe
              src={
                "https://player.vimeo.com/video/857861963?h=9b6bbf4f86&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              }
              title="pitch video desktop"
              width="100%"
              height="360"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <Card title="EO Workshop">
            <WorkOutTable workShopData={eoMobilityData} />
          </Card>
        </Col>
        <WorkOutCard workShopData={eoMobilityData} />
        <Divider />
      </Row>
    </div>
  );
};

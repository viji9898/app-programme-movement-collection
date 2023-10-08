import { Button, Card, Col, Divider, Row, Space } from "antd";
import { WorkOutTable } from "../workshop/workoutTable";
import { WorkOutCard } from "../workshop/workoutCard";
import { eoMobilityData } from "../workshopData/eoMobilityData";
import { InstagramOutlined } from "@ant-design/icons";

export const EoMobility = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Row gutter={[18, 18]} style={{ maxWidth: "1200px" }}>
        <Col span={24}>
          <Divider />
          <div className="mainFont" style={{ padding: "0px 10px 0px 10px" }}>
            <p>
              The EO Wokshop focuses on fundamental mobility and core exercises
              to help combat desk damage and to live a healthier lifestyle.{" "}
              <br></br>
              <br></br>
              <strong>{" How to use: "}</strong>
              You can follow the order presented or pick and choose a routine
              that suits your goals.
              <br></br>
              <br></br>
              <b>{"Questions? reach out to us over Instagram: "}</b>
              <Space>
                <Button
                  href="https://instagram.com/katherinesamuelson"
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                >
                  <InstagramOutlined style={{ verticalAlign: "baseline" }} />
                  Katherine
                </Button>
                <Button
                  href="https://www.instagram.com/jaxandtonic"
                  target="_blank"
                  rel="noreferrer"
                  size="small"
                >
                  <InstagramOutlined style={{ verticalAlign: "baseline" }} />
                  Jacqueline
                </Button>
              </Space>
            </p>
          </div>
          {/* <div>
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
          </div> */}
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

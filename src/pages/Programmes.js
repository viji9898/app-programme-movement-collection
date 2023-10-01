import { Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

export const Programmes = () => {
  const programData = [
    {
      programTitle: "Beginner Rings",
      url: "/beginner-rings",
      imageUrl:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/16c31c96-a82f-44b8-aa6b-c16cc123db74.__CR104,227,1138,1138_PT0_SX300_V1___.jpg",
    },
    {
      programTitle: "EO - Mobility",
      url: "/eo-mobility",
      imageUrl:
        "https://m.media-amazon.com/images/S/aplus-media-library-service-media/613dd9cd-68f6-4a3a-803c-4b35e49eef3c.__CR168,0,664,664_PT0_SX300_V1___.jpg",
    },
    // {
    //   programTitle: "Beginner Rings",
    //   url: "/beginner-rings",
    //   imageUrl:
    //     "https://m.media-amazon.com/images/S/aplus-media-library-service-media/757bfc42-68be-4819-b38c-172dae8798d2.__CR0,0,1600,1600_PT0_SX300_V1___.jpg",
    // },
    // {
    //   programTitle: "Beginner Rings",
    //   url: "/beginner-rings",
    //   imageUrl:
    //     "https://m.media-amazon.com/images/S/aplus-media-library-service-media/aa448b58-c234-4160-8729-87661b3b3986.__CR10,83,1138,1138_PT0_SX220_V1___.jpg",
    // },
  ];

  const listProgramData = programData.map((data) => {
    return (
      <Col xs={12} sm={12} md={8}>
        <Link to={data.url} style={{ textDecoration: "none" }}>
          <Card
            cover={<img alt="example" src={data.imageUrl} />}
            title={data.programTitle}
            hoverable
          ></Card>
        </Link>
      </Col>
    );
  });
  return (
    <div className="main" style={{ padding: "5px" }}>
      <Row gutter={[18, 18]} style={{ marginTop: "10px" }}>
        {listProgramData}
      </Row>
    </div>
  );
};

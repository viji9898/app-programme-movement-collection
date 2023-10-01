import { Card, Carousel, Col, Image, Row, Tag } from "antd";

export const WorkOutCard = ({ workShopData }) => {
  const listWorkOuts = workShopData.map((data) => {
    const listGifs = data.gifUrl.map((data) => {
      return (
        <div>
          <Image preview={false} src={data.url} />
        </div>
      );
    });
    return (
      <Col
        id={data.title}
        xs={24}
        sm={24}
        md={6}
        style={{ textAlign: "center" }}
      >
        <Card
          extra={<Tag>{data.grouping}</Tag>}
          actions={[`Sets: ${data.sets}`, `Reps: ${data.reps}`]}
          title={data.title}
        >
          <Carousel>{listGifs}</Carousel>
        </Card>
      </Col>
    );
  });
  return <Row gutter={[18, 18]}>{listWorkOuts}</Row>;
};

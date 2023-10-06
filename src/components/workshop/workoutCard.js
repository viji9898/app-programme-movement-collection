import { Card, Col, Row, Tag } from "antd";

export const WorkOutCard = ({ workShopData }) => {
  const listWorkOuts = workShopData.map((data) => {
    // const listGifs = data.gifUrl.map((data) => {
    //   return (
    //     <div>
    //       <Image preview={false} src={data.url} />
    //     </div>
    //   );
    // });
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
          {/* <Carousel>{listGifs}</Carousel> */}
          <div style={{ padding: "177.78% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/871737137?autoplay=1&amp;badge=0&amp;autopause=0&amp;quality_selector=1&amp;progress_bar=1&amp;player_id=0&amp;app_id=58479"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
              }}
              title="IMG_6010"
            ></iframe>
          </div>
          <script src="https://player.vimeo.com/api/player.js"></script>
        </Card>
      </Col>
    );
  });
  return <Row gutter={[18, 18]}>{listWorkOuts}</Row>;
};

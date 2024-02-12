import { Button, Col, Row } from "antd";
import "./styles.css";

const SlideCard = ({ title, desc, cover }) => {
  return (
    <div className="box">
      <Row justify="space-between">
        <Col>
          <h1>{title}</h1>
          <p>{desc}</p>
          <Button type="text" className="btn-primary">
            Visit Collections
          </Button>
        </Col>
        <Col>
          <img src={cover} alt="#" />
        </Col>
      </Row>
    </div>
  );
};

export default SlideCard;

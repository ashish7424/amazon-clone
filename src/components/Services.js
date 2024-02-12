import React from "react";
import { Col, Row } from "antd";
import { serviceData } from "constants/data.constants";

const Services = () => {
  return (
    <div className="wrapper">
      <Row justify="center">
        {serviceData.map((val, index) => {
          return (
            <Col
              style={{ backgroundColor: val.bg }}
              className="feature"
              key={index}
            >
              <div className="icon">{val.icon}</div>
              <h3>{val.title}</h3>
              <p>{val.subtitle}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Services;

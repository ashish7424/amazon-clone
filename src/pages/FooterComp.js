import "./main.css";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";
import amazon from "assets/png/amazon-removebg-preview.png";
import { SocialData, footerData } from "constants/data.constants";

function FooterComp() {
  return (
    <div className="footer-div">
      <Row className="foooter-row" justify="center">
        <Col className="sub-col" md={24} lg={12} sm={24} xs={24} xl={6} xxl={6}>
          <Col className="amazon-col">
            <img src={amazon} alt="amazon-logo" height={60} width={120} />
            <Col className="amazon-title">
              High-quality products that are both beautiful and meaningful.
            </Col>
            <Col>
              <Row>
                {SocialData.map((data, index) => {
                  return (
                    <Col span={3} key={index}>
                      <Link
                        to={data.link}
                        target="_blank"
                        className="social-link"
                      >
                        {data.icon}
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Col>
        </Col>
        {footerData.map((item, index) => {
          return (
            <Col
              key={index}
              className="sub-col"
              md={8}
              lg={12}
              sm={24}
              xs={24}
              xl={3}
              xxl={2}
            >
              <Col className="quick">{item.label}</Col>
              {item.value.map((subData, i) => {
                return (
                  <Col key={i + subData} className="quick-links">
                    {subData}
                  </Col>
                );
              })}
            </Col>
          );
        })}
      </Row>
      <div className="footer-title">
        © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
}

export default FooterComp;

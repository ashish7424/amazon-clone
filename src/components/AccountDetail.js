import React from "react";
import { Col, Row } from "antd";

const AccountDetail = ({ label, userDetail, classname }) => {
  return (
    <Row justify="space-between" className={classname}>
      <Col>
        <Col className="account-col">{label} :</Col>
        <Col className="account-subcol">{userDetail}</Col>
      </Col>
    </Row>
  );
};

AccountDetail.defaultProps = {
  classname: "account-details",
};

export default AccountDetail;

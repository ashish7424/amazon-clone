import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";
import ServiceHeader from "components/ServiceHeader";
import { conditionData } from "constants/data.constants";
import { routeNames } from "constants/pageRoutes.constants";

const { Text } = Typography;

function Help() {
  return (
    <div style={{ width: "650px" }}>
      <ServiceHeader title="Hello, What can we help you with?" />
      <Text>{conditionData.label}</Text>
      <Link to={routeNames.Login}>www.amazon.in/gp/help/contact-us</Link>
    </div>
  );
}

export default Help;

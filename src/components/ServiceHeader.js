import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ServiceHeader = ({ title }) => {
  return (
    <div>
      <Typography.Title level={1}>{title}</Typography.Title>
      <Text style={{ fontSize: "16px" }}>
        <Text style={{ fontWeight: 800, fontSize: "18px" }}>Disclaimer: </Text>
        In the event of any discrepancy or conflict, the English version will
        prevail over the translation.
      </Text>
    </div>
  );
};

export default ServiceHeader;

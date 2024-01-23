import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const ServiceHeader = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p style={{ fontSize: "16px" }}>
        <Text style={{ fontWeight: 800, fontSize: "18px" }}>Disclaimer:</Text>
        In the event of any discrepancy or conflict, the English version will
        prevail over the translation.
      </p>
    </div>
  );
};

export default ServiceHeader;

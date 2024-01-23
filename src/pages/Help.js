import React from "react";
import { Link } from "react-router-dom";
import { conditionData } from "constants/data.constants";
import { routeNames } from "constants/pageRoutes.constants";
import ServiceHeader from "components/ServiceHeader";

function Help() {
  return (
    <div style={{ width: "600px" }}>
      <ServiceHeader title="Hello, What can we help you with?" />
      {conditionData.label}
      <Link to={routeNames.Login}>www.amazon.in/gp/help/contact-us</Link>
    </div>
  );
}

export default Help;

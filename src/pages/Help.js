import React from "react";
import { Link } from "react-router-dom";
import ServiceHeader from "components/ServiceHeader";
import { conditionData } from "constants/data.constants";
import { routeNames } from "constants/pageRoutes.constants";

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

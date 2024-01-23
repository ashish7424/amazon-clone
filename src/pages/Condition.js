import React from "react";
import { Link } from "react-router-dom";
import ServiceHeader from "components/ServiceHeader";
import { conditionData } from "constants/data.constants";
import { routeNames } from "constants/pageRoutes.constants";

function Condition() {
  return (
    <div style={{ width: "600px" }}>
      <ServiceHeader title="Conditions of Use" />
      {conditionData.label}
      <Link to={routeNames.Login}>www.amazon.in/gp/help/contact-us</Link>
    </div>
  );
}

export default Condition;

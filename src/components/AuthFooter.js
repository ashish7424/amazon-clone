import React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "constants/pageRoutes.constants";

const AuthFooter = ({footerLabel}) => {
  return (
    <div className="policy">
      {footerLabel}
      <Link className="footer-link" to={routeNames.Condition}>
        {" "}
        Conditions of Use{" "}
      </Link>{" "}
      and
      <Link className="footer-link" to={routeNames.Privacy}>
        {" "}
        Privacy Policy
      </Link>
      .
    </div>
  );
};

export default AuthFooter;

import React from "react";
import { Link } from "react-router-dom";
import { routeNames } from "constants/pageRoutes.constants";

const FooterLink = () => {
  return (
    <div>
      <div className="footer">
        <Link className="footer-link" to={routeNames.Condition}>
          Conditions of Use
        </Link>
        <Link className="footer-link" to={routeNames.Privacy}>
          Privacy Notice
        </Link>
        <Link className="footer-link" to={routeNames.Help}>
          Help
        </Link>
      </div>
      <div className="footer-title">
        © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
      </div>
    </div>
  );
};

export default FooterLink;

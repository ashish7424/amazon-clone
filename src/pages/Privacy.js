import React from "react";
import { privacyData } from "constants/data.constants";
import ServiceHeader from "components/ServiceHeader";

function Privacy() {
  return (
    <div className="privacy-main">
      <ServiceHeader title="Privacy Policy" />
      {privacyData.map((data, index) => {
        return <div key={index}>{data}</div>;
      })}
    </div>
  );
}

export default Privacy;

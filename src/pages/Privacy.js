import React from "react";
import ServiceHeader from "components/ServiceHeader";
import { privacyData } from "constants/data.constants";

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

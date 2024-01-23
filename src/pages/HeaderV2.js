import React from "react";
import { useNavigate } from "react-router-dom";
import { routeNames } from "constants/pageRoutes.constants";
import AmazonIcon from "assets/svg/AmazonIcon";
import MiniTVIcon from "assets/svg/MiniTVIcon";
import "./main.css";

const HeaderV2 = () => {
  const navigate = useNavigate();

  return (
    <div className="minitv-header flexBetween">
      <div
        style={{ paddingLeft: 20, cursor: "pointer" }}
        onClick={() => navigate(routeNames.miniTV)}
      >
        <MiniTVIcon />
      </div>
      <div
        style={{ paddingRight: 20, cursor: "pointer" }}
        onClick={() => navigate(routeNames.Home)}
      >
        <AmazonIcon />
      </div>
    </div>
  );
};

export default HeaderV2;

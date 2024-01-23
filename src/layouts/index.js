import React from "react";
import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import FooterComp from "pages/FooterComp";
import HeaderV1 from "pages/HeaderV1";
import HeaderV2 from "pages/HeaderV2";

const Layouts = () => {
  return (
    <Layout className="layout-main">
      <HeaderV1 />
      <div className="outlet-main-div">
        <Content className="outlet-main">
          <Outlet />
        </Content>
        <FooterComp />
      </div>
    </Layout>
  );
};

const LayoutsV1 = () => {
  return (
    <Layout>
      <HeaderV2 />
      <Content className="outlet-sub-main">
        <Outlet />
      </Content>
    </Layout>
  );
};

export { LayoutsV1 };

export default Layouts;

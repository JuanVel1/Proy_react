import React from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/Menu/MenuTop";
import { GithubOutlined } from "@ant-design/icons";

export default function LayoutBasic(props) {
  const { children } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header className="layout-admin__header">
        <MenuTop />
      </Header>
      <Content>{children}</Content>
      React Project 2022
      <Footer className="layout-admin__footer">
        <a target="_blank" href="https://github.com/JuanVel1" rel="noreferrer">
          <GithubOutlined style={{ fontsize: "17px", color: "#61618a" }} /> Juan
        </a>
      </Footer>
    </Layout>
  );
}

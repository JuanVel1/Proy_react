import React from "react";
import { Layout } from "antd";

export default function LayoutBasic(props) {
  const { children } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Header
        style={{
          borderTop: "1px solid #e8e8e8",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          display: "flex",
        }}
      >
      <Header className="layout-admin__header"></Header>
        Menu
      </Header>
      <Content>{children}</Content>
      <Footer
        style={{
          borderTop: "1px solid #e8e8e8",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          backgroundColor: "white",
          textAlign: "center",
          display: "flex",
        }}
      >
        React Project 2022
      </Footer>
    </Layout>
  );
}

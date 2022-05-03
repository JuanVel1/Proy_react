import React from "react";
import { Layout } from "antd";
import "../scss/index.scss";

/*
Crear 3 cards en el home - modulo 1 2 3 y que renderizen cada modulo - link
crear un github por client y server
git ignore con node.js
*/
export default function LayoutAdmin(props) {
  const { children } = props;
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <h2>Menu Sider</h2>
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
          Header
        </Header>
        <Content>{children}</Content>
      </Layout>
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

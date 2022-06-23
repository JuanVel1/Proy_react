import React from "react";
import { Layout } from "antd";
export default function LayoutBasic(props) {
  const { children } = props;
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header className=""></Header>
      <Content>{children}</Content>
    </Layout>
  );
}

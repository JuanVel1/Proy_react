import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/Menu/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import "./LayoutAdmin.scss";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-admin" style={{ marginLeft: menuCollapsed ? "80px": "200px" }}>
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          {children}
        </Content>
        <Footer className="layout-admin__footer">
          <a  target="_blank" href="https://github.com/JuanVel1"  rel="noreferrer"><GithubOutlined style={{fontsize : "17px", color:"#61618a"}} /> Juan</a>
        </Footer>
      </Layout>
    </Layout>
  );
}

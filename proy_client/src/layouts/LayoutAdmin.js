import React, { useState } from "react";
import MenuTop from "../components/AdminComponents/Menu/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider/MenuSider";
import { Layout } from "antd";
import "./LayoutAdmin.scss";

export default function LayoutAdmin() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className="layout-admin">
        <Header className="layout-admin__header">
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className="layout-admin__content">
          <h1>Rutas</h1>
        </Content>
        <Footer className="layout-admin__footer">
          MERN React proyect 2022
        </Footer>
      </Layout>
    </Layout>
  );
}

import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/Menu/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider/MenuSider";
import { GithubOutlined } from "@ant-design/icons";
import "./LayoutAdmin.scss";
import useAuth from "../hooks/useAuth";
import { getAccessToken, getRefreshToken } from "../api/auth";
import AdminSignIn from "../components/AdminComponents/SignIn/SignIn";
import { Route, Routes } from "react-router";

export default function LayoutAdmin(props) {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  const { children } = props;
  const { user, isLoading } = useAuth();
  const refreshToken = getRefreshToken();
  const accessToken = getAccessToken();

  if (!user && !isLoading) {// === None, son equivalentes
    return (
      <>
        <AdminSignIn>
          <Routes>
            <Route path="/admin/login" element={<AdminSignIn />} />
          </Routes>
        </AdminSignIn>
      </>
    );
  }

  if (user && !isLoading) {//Si existe el usuario y no hay nada que cargar
    return (
      <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout
          className="layout-admin"
          style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
        >
          <Header className="layout-admin__header">
            <MenuTop
              menuCollapsed={menuCollapsed}
              setMenuCollapsed={setMenuCollapsed}
            />
          </Header>
          <Content className="layout-admin__content">{children}</Content>
          <Footer className="layout-admin__footer">
            <a
              target="_blank"
              href="https://github.com/JuanVel1"
              rel="noreferrer"
            >
              <GithubOutlined style={{ fontsize: "17px", color: "#61618a" }} />{" "}
              Juan
            </a>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import { HomeOutlined, TeamOutlined } from "@ant-design/icons";
import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const Location = useLocation()

  return (
    <Sider className="admin-sider" collapsed={menuCollapsed}>
      <Menu theme="aliceblue" mode="inline" defaultSelectedKeys={[Location.pathname]}>
        <Menu.Item key="/admin">
          <Link to={"/admin"}>
            <HomeOutlined />
            <span className="nav-text">Home</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/admin/users">
          <Link to={"/admin/users"}>
            <TeamOutlined />
            <span className="nav-text">Usuarios</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

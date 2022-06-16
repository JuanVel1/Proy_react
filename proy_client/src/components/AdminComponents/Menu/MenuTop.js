import React from "react";
import { Button } from "antd";
import "./MenuTop.scss";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Logo from "../../../assets/img/svg/Logo.svg";
import { Link } from "react-router-dom";
import { Logout } from "../../../api/auth";

export default function Menu(props) {
  const { menuCollapsed, setMenuCollapsed } = props;
  const userLogout = () => {
    console.log("Cerrando sesion");
    Logout();
    window.location.reload();
  };
  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <img className="menu-top__left-logo" src={Logo} alt="Alternate" />
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
      </div>
      <div className="menu-top__right">
        <Link to="/">
          <Button type="link" onClick={userLogout}>
            <UserOutlined />
          </Button>
        </Link>
      </div>
    </div>
  );
}

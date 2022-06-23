import React,{useState} from "react";
import { Link, useLocation } from "react-router-dom";
import { Layout, Menu } from "antd";
import Modal from "../../Modal";
import { HomeOutlined, TeamOutlined } from "@ant-design/icons";
import "./MenuSider.scss";

export default function MenuSider(props) {
  const { menuCollapsed } = props;
  const { Sider } = Layout;
  const [modal, setModal] = useState(false)
  const Location = useLocation();

  return (
    <>
      {modal ? <Modal>{{ setModal }}</Modal> : null}
      <Sider className="admin-sider" collapsed={menuCollapsed}>
        <Menu
          theme="aliceblue"
          mode="inline"
          defaultSelectedKeys={[Location.pathname]}
        >
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
          <Menu.Item className="admin-sider__options__option" key="2">
            <Link to={"/admin/subjects"}>
              <TeamOutlined />
              <span className="nav-text">Asignaturas</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}

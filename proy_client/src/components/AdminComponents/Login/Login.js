import SignIn from "../SignIn/SignIn"
import Register from "../Register/Register"
import { Tabs } from "antd";
import Layout from "antd/lib/layout/layout";
import "./Login.scss"
const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}

export default function Login() {
  return (
    <Layout className="campo">
      <Tabs onChange={callback} className="menu-tab" type="card">
        <TabPane  tab="Iniciar sesion" key="1">
          <SignIn/>
        </TabPane>
        <TabPane tab="Registrarse" key="2">
          <Register/>
        </TabPane>
      </Tabs>
    </Layout>
  );
}

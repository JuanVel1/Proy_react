import { Form, Input, Button, Checkbox, Layout } from "antd";
import "./SignIn.scss";

export default function AdminSignIn(props) {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Layout className="capa-nuevo">
      <Form 
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="cuadro"
      >
        <Form.Item
          style={{color:"white"}}
          className="campo"
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          Email
          <Input className="campo"/>
        </Form.Item>

        <Form.Item style={{color:"white"}}
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Ingrese su contraseña!",
            },
          ]}
        >
          Contraseña
          <Input.Password  className="campo"/>
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox><span className="check">Remember me</span></Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 12,
          }}
        >
          <Button  className="boton" type="ghost" htmlType="submit">
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

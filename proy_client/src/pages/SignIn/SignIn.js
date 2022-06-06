import {Form, Input, Layout } from "antd";
import {UserOutlined, MailOutlined} from "@ant-design/icons"
import { getAccessToken } from "../../api/auth";
import {Route, Routes } from "react-router-dom"

export function SignIn() {
    const {Content} = Layout
    const {TabPane} = TabPane

    if (getAccessToken()) {
        <Routes>
            <Route path="/admin"/>
        </Routes>
    }

    return(
        <Layout>
            <Form>
                <Form.Item 
                label="Username"
                name ="Username"
                rules={[{required:true, message:"Por favor ingresa tu nombre"}]}
                ></Form.Item>
                <Input />
                <Form.Item 
                label="Lastname"
                name ="Lastname"
                rules={[{required:true, message:"Por favor ingresa tu apellido"}]}
                ></Form.Item>
                <Input />
            </Form>




            <Input placeholder="Nombre" prefix={<UserOutlined/>}/>
            <Input placeholder="Apellido" prefix={<UserOutlined/>}/>

            <Input placeholder="Email" prefix={<MailOutlined/>}/>
            
            <Input placeholder="Contraseña" prefix={<MailOutlined/>}/>
            <Input placeholder="Repetir" prefix={<MailOutlined/>}/>

        </Layout>
    )
}
import { Form, Input, Button, Checkbox, Layout, notification } from "antd";
import "./SignIn.scss";
import React, { useState } from "react";
import {
  emailValidation,
  minLengthValidation,
} from "../../../validations/FormValidation";
import { signInApi } from "../../../api/user.js";
import jwtDecode from "jwt-decode";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../../../api/constants";
import { getAccessToken } from "../../../api/auth";
import { Route, Routes } from "react-router-dom";

export default function AdminSignIn() {
  const [inputs, setInputs] = useState({
    name_user: "",
    password: "",
  });
  const [formValid, setFormValid] = useState({
    name_user: false,
    password: false,
  });

  /* Se valida si el usuario checkeo el privacyPolicy */
  const changeForm = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };


  if (getAccessToken()) {
    <Routes>
      <Route path="/admin" />
    </Routes>;
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const inputValidation = (event) => {
    const { type, name } = event.target;
    if (type === "email") {
      setFormValid({ ...formValid, [name]: emailValidation(event.target) });
    }
    if (type === "password") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(event.target, 6),
      });
    }
  };

  const login = async (event) => {
    event.preventDefault();
    console.log("Estoy en el login");
    const nameUserVal = inputs.name_user;
    const passwordVal = inputs.password;
    if (!nameUserVal || !passwordVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      // aqui
      console.log(inputs);
      const result = await signInApi(inputs);
      console.log(result);

      if (!result.user_creado) {
        notification["error"]({
          message: "Usuario no se ha podido encontrar ! " + result.message,
        });
      } else {
        const accessTokenVal = result.token.accessToken;
        const refreshTokenVal = result.token.refreshToken;
        const usuario = jwtDecode(accessTokenVal);
        console.log(usuario);
        localStorage.setItem(ACCESS_TOKEN, accessTokenVal);
        localStorage.setItem(REFRESH_TOKEN, refreshTokenVal);

        notification["info"]({
          message: "Inicio de sesion exitoso!",
        });
        resetForm();
      }
      window.location.href = "/admin";
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }
    setInputs({
      name_user: "",
      password: "",
    });

    setFormValid({
      name_user: false,
      email: false,
    });
  };

  return (
    <Layout className="capa-nuevo">
      <Form
        onChange={changeForm}
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
          style={{ color: "white" }}
          className="campo"
          label="name_user"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          Email
          <Input
            name="name_user"
            className="campo"
            onChange={inputValidation}
            value={inputs.name_user}
          />
        </Form.Item>

        <Form.Item
          style={{ color: "white" }}
          label="Password"
          rules={[
            {
              required: true,
              message: "Ingrese su contraseña!",
            },
          ]}
        >
          Contraseña
          <Input.Password
            name="password"
            className="campo"
            onChange={inputValidation}
            value={inputs.password}
          />
        </Form.Item>

        <Form.Item
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>
            <span className="check" name="remember">
              Remember me
            </span>
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 12,
          }}
        >
          <Button
            className="boton"
            type="ghost"
            htmlType="submit"
            onClick={login}
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </Layout>
  );
}

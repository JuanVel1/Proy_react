import React, { useState } from "react";
import { Form,Layout, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { signUpApi } from "../../../api/user.js";
import "./Register.scss";
import {
  emailValidation,
  minLengthValidation,
} from "../../../validations/FormValidation";

export default function RegisterForm() {
  const [inputs, setInputs] = useState({
    name_user: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: "",
    privacyPolicy: false,
  });
  const [formValid, setFormValid] = useState({
    name_user: false,
    lastname: false,
    email: false,
    password: false,
    repeatPassword: false,
    privacyPolicy: false,
  });

  /* Se valida si el usuario checkeo el privacyPolicy */
  const changeForm = (event) => {
    if (event.target.name === "privacyPolicy") {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.checked,
      });
    } else {
      setInputs({
        ...inputs,
        [event.target.name]: event.target.value,
      });
    }
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
    if (type === "checkbox") {
      setFormValid({ ...formValid, [name]: event.target.checked });
    }
  };

  const register = async (event) => {
    event.preventDefault();
    console.log("Estoy en el register");
    const nameUserVal = inputs.name_user;
    const lastnameVal = inputs.lastname;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;
    const privacyPolicyVal = inputs.privacyPolicy;
    if (
      !nameUserVal ||
      !lastnameVal ||
      !emailVal ||
      !passwordVal ||
      !repeatPasswordVal ||
      !privacyPolicyVal
    ) {
      notification["error"]({
        message: "Todos los campos son obligatorios",
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas deben ser iguales",
        });
        console.log("Son diferentes");
      } else {
        const result = await signUpApi(inputs);
        console.log(result);
        if (!result.user_creado) {
          notification["error"]({
            message: "Usuario no se ha podido crear ! " + result.message,
          });
        } else {
          notification["success"]({
            message: "Usuario creado exitosamente ! " + result.message,
          });
        }
        resetForm();
      }
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
      lastname: "",
      email: "",
      password: "",
      repeatPassword: "",
      privacyPolicy: false,
    });

    setFormValid({
      name_user: false,
      lastname: false,
      email: false,
      password: false,
      repeatPassword: false,
      privacyPolicy: false,
    });
  };

  return (
    <Layout className="capa-nuevo">
      <Form className="register-form cuadro" onChange={changeForm}>
        <Form.Item>
        <span className="check">Nombres</span>
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            name="name_user"
            placeholder="Nombres"
            className="register-form__input campo"
            onChange={inputValidation}
            value={inputs.name_user}
          />
        </Form.Item>
        <Form.Item>
        <span className="check">Apellidos</span>
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="text"
            name="lastname"
            placeholder="Apellido"
            className="register-form__input campo"
            onChange={inputValidation}
            value={inputs.lastname}
          />
        </Form.Item>
        <Form.Item>
        <span className="check">Email</span>
          <Input
            prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="email"
            name="email"
            placeholder="Correo electronico"
            className="register-form__input campo"
            onChange={inputValidation}
            value={inputs.email}
          />
        </Form.Item>
        <Form.Item>
          <span className="check">Contraseña</span>
          <Input
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            name="password"
            placeholder="Contraseña"
            className="register-form__input campo"
            onChange={inputValidation}
            value={inputs.password}
          />
        </Form.Item>
        <Form.Item>
        <span className="check">Repetir contraseña</span>
          <Input
            prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
            type="password"
            name="repeatPassword"
            placeholder="Repetir contraseña"
            className="register-form__input campo"
            onChange={inputValidation}
            value={inputs.repeatPassword}
          />
        </Form.Item>
        <Form.Item>
          <Checkbox
            className="check"
            name="privacyPolicy"
            onChange={inputValidation}
            checked={inputs.privacyPolicy}
          >
            He leído y acepto la política de privacidad.
          </Checkbox>
        </Form.Item>
        <Button onClick={register} className="register-form__button boton">
          Crear cuenta
        </Button>
      </Form>
    </Layout>
  );
}

import React, { useState } from "react";
import { Form, Input, Select, Row, Col, notification, Button } from "antd";
import {} from "@ant-design/icons";
import { signInApi } from "../../../../api/user";
import { getAccessToken } from "../../../../api/auth";
import "./AddUser.scss";
import { message } from "antd";
export default function EditUser(props) {
  const { setVisibleModal, setReloadUser } = props;
  const [userData, setUserData] = useState({});
  const accessToken = getAccessToken();
  const addUser = (event) => {
    event.preventDefault(); //capturar valores
    //   Validar si el usuario no existe
    !userData.name_user ||
    !userData.lastname ||
    !userData.email ||
    !userData.password ||
    !userData.rol ||
    !userData.name ||
    !userData.repeatPassword
      ? notification["error"]({
          message: "Todos los campos son obligatorios",
        })
      : userData.password !== userData.repeatPassword
      ? // Validamos si el campo password coincide con repeatPassword
        notification["error"]({
          message: "Las contraseñas no coinciden",
        })
      : //Cuando las contraseñas si coinciden debemos consultar el accessToken y el payload
        signInApi(accessToken, userData)
          .then((result) => {
            notification["success"]({
              message: result,
            });
            setVisibleModal(false);
            setReloadUser(true); // cargar nuevamente la pagina
            setUserData({});
          })
          .catch((err) => {
            notification["error"]({
              message: err,
            });
          }); // <-- posible error
  };
  return (
    <div>
      <AddForm
        userData={userData}
        setUserData={setUserData}
        addUser={addUser}
      ></AddForm>
    </div>
  );
}

const AddForm = (props) => {
  const { userData, setUserData, addUser } = props;
  const { Option } = Select; //trabajar con un select o lista desplegable
  //crear el formulario completo
  return <Form onSubmit={NaN}></Form>;
};

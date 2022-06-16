import React, { useState, useEffect } from "react";
import "./User.scss";
import { getActiveUsers } from "../../api/user";
import { getAccessToken } from "../../api/auth";

export default function User() {
  // const [users, setUsers] = useState([]);
  // const token = getAccessToken();
  // console.log(users);

  // useEffect(() => {
  //   getUsers(token).then((response) => {
  //     setUsers(response);
  //   });
  // }, [token]);

  // return (
  //   <div>
  //     <h1>Lista de usuarios</h1>
  //   </div>
  // );
  const [activeUsers, setActiveUsers] = useState([]);
  const [inactiveUsers, setInactiveUser] = useState([]);
  const token = getAccessToken();
  console.log(
    "Usuario activo",
    activeUsers,
    " Usuario inactivo ",
    inactiveUsers
  );

  useEffect(() => {
    getActiveUsers(token, true).then((response) => {
      setActiveUsers(response.users);
    });
    getActiveUsers(token, false).then((response) => {
      setInactiveUser(response.users);
    });
  }, [token]);

  return <div>{/* <h1>Lista de usuarios</h1> */}</div>;
}

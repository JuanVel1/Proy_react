import React from "react";
import { createContext, useState, useEffect } from "react";
import {
  getAccessToken,
  getRefreshToken,
  refreshAccessToken,
  Logout,
} from "../api/auth";
import jwtDecode from "jwt-decode"; // decodificacion de contraseña
export const AuthContext = createContext();

export default function AuthProvider(props) {
  console.log(props);
  //variables entre llaves --> desfragmentar
  const { children } = props; // se carga la pagina mediante el children, se crea la variable props
  const [user, setUser] = useState({
    user: true, // hook que permite conocer el estado del usuario
    isLoading: true, // ver si si esta cargando el contenido
  });
  useEffect(() => {
    checkUserLogin(setUser); // el checkUserLogin se valida que el usuario siempre este conectado
  }, []);
  /* Devolvemos la página web para App.js */

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

const checkUserLogin = (setUser) => {
  console.log("Checking if User is login");
  const accessToken = getAccessToken();
  /* Validamos si el token es inválido o nulo */
  if (!accessToken) {
    const refreshToken = getRefreshToken();
    /* Validamos si el token caduco o expiro */
    if (!refreshToken) {
      /* Si hay algo en el LocalStorage Lo eliminamos */
      Logout();
      setUser({
        user: null,
        isLoading: false,
      });
    } else refreshAccessToken(refreshToken);
  } else {
    /* Validamos si el accessToken es válido */
    setUser({
      user: jwtDecode(accessToken),
      isLoading: false,
    });
  }
};

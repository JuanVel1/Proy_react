import { basepath, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${basepath}/${apiVersion}/signup`;
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return {
          user_creado: true,
          message: "Usuario creado exitosamente",
        };
      }
      return {
        user_creado: false,
        message: result.message,
      };
    })
    .catch((err) => {
      return {
        user_creado: false,
        message: err.message,
      };
    });
}

export function signInApi(data) {
  const url = `${basepath}/${apiVersion}/signIn`;
  console.log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.accessToken) {
        return {
          user_creado: true,
          message: "Usuario encontrado",
          token: result,
        };
      } else {
        console.log("aqui");
        return {
          user_creado: false,
          message: result.message,
        };
      }
    })
    .catch((err) => {
      return {
        user_creado: false,
        message: err.message,
      };
    });
}

export function getUsers(token) {
  const url = `${basepath}/${apiVersion}/users`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getActiveUsers(token, status) {
  const url = `${basepath}/${apiVersion}/active-users?active=${status}`;
  const params = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };
  return fetch(url, params)
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    return result;
  })
  .catch((err) => {
    return err.message;
  });
}

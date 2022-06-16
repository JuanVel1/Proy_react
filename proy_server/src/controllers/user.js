const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user.model");
const jwt = require("../service/jwt");

function signUp(req, res) {
  const user = new User();
  const { name, lastname, email, password, repeatPassword } = req.body;
  user.name = name;
  user.lastname = lastname;
  user.email = email;
  user.role = "admin";
  user.active = true;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "Las contraseñas son obligatorias" });
  } else {
    if (password != repeatPassword) {
      res.status(404).send({ message: "Las contraseñas no coinciden" });
    } else {
      bcrypt.hash(password, null, null, (err, hash) => {
        if (err) {
          res.status(500).send({ message: "Error al encriptar la contraseña" });
        } else {
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "El usuario ya  existe" });
            } else {
              if (!userStored) {
                res.status(404).send({ message: "Error al crear el usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

const signIn = (req, res) => {
  const params = req.body;
  const email = params.name_user.toLowerCase();
  const password = params.password;
  User.findOne({ email }, (err, userStored) => {
    if (err) {
      res.status(500).send({ message: "Error del servidor." });
    } else {
      if (!userStored) {
        res.status(404).send({ message: "Usuario no encontrado." });
      } else {
        bcrypt.compare(password, userStored.password, (err, check) => {
          if (err) {
            res.status(500).send({ message: "Error del servidor." });
          } else if (!check) {
            res.status(404).send({ message: "La contraseña es incorrecta." });
          } else {
            if (!userStored.active) {
              res
                .status(200)
                .send({ code: 200, message: "El usuario no se ha activado." });
            } else {
              res.status(200).send({
                accessToken: jwt.createAccessWithToken(userStored),
                refreshToken: jwt.createRefreshToken(userStored),
              });
            }
          }
        });
      }
    }
  });
};

const getUsers = (req, res) => {
  User.find().then((users) => {
    !users
      ? res.status(404).send({ message: "No se ha encontrado ningún usuario" })
      : res.status(200).send({ users });
  });
};
const getActiveUsers = (req, res) => {
  const activeUsers = req.query;
  User.find({ active: activeUsers.active }).then((users) => {
    !users
      ? res.status(404).send({ message: "No se ha encontrado ningún usuario" })
      : res.status(200).send({ users });
  });
};

module.exports = { signUp, signIn, getUsers, getActiveUsers };

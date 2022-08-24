var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* GET home page. */
router.get("/juegos", function (req, res, next) {
  models.Juegos.findAll()
    .then((Juegos) => {
      res.json(Juegos);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/juegos/:id", function (req, res, next) {
  let id = req.params.id;

  models.Juegos.findAll({ where: { id_juego: id } })
    .then((Juego) => {
      res.json(Juego);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/equipos", function (req, res, next) {
  models.Equipos.findAll()
    .then((Equipos) => {
      res.json(Equipos);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/equipos/:id", function (req, res, next) {
  let id = req.params.id;

  models.Equipos.findAll({ where: { id_equipo: id } })
    .then((Equipo) => {
      res.json(Equipo);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/jugadores/:id", function (req, res, next) {
  let id = req.params.id;

  models.Jugadores.findAll({ where: { id_jugador: id } })
    .then((Jugador) => {
      res.json(Jugador);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/jugadores", function (req, res, next) {
  const id_roster = +req.query.id_roster;

  models.Jugadores.findAll({ where: { roster: id_roster } })
    .then((Jugador) => {
      res.json(Jugador);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/roster", function (req, res, next) {
  const id_equipo = +req.query.id_equipo;
  models.Rosters.findAll({ where: { id_equipo: id_equipo } })
    .then((Roster) => {
      res.json(Roster);
    })
    .catch((error) => res.status(400).send(error));
});

router.get("/roster/:id", function (req, res, next) {
  let id = req.params.id;
  models.Rosters.findAll({ where: { id_roster: id } })
    .then((Roster) => {
      res.json(Roster);
    })
    .catch((error) => res.status(400).send(error));
});

module.exports = router;

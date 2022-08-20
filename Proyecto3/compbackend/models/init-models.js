var DataTypes = require("sequelize").DataTypes;
var _Equipos = require("./Equipos");
var _Juegos = require("./Juegos");
var _JuegosEquipos = require("./JuegosEquipos");
var _Jugadores = require("./Jugadores");
var _Rosters = require("./Rosters");

function initModels(sequelize) {
  var Equipos = _Equipos(sequelize, DataTypes);
  var Juegos = _Juegos(sequelize, DataTypes);
  var JuegosEquipos = _JuegosEquipos(sequelize, DataTypes);
  var Jugadores = _Jugadores(sequelize, DataTypes);
  var Rosters = _Rosters(sequelize, DataTypes);

  Equipos.belongsToMany(Juegos, { as: 'id_juego_Juegos', through: JuegosEquipos, foreignKey: "id_equipo", otherKey: "id_juego" });
  Juegos.belongsToMany(Equipos, { as: 'id_equipo_Equipos', through: JuegosEquipos, foreignKey: "id_juego", otherKey: "id_equipo" });
  JuegosEquipos.belongsTo(Equipos, { as: "id_equipo_Equipo", foreignKey: "id_equipo"});
  Equipos.hasMany(JuegosEquipos, { as: "JuegosEquipos", foreignKey: "id_equipo"});
  Rosters.belongsTo(Equipos, { as: "id_equipo_Equipo", foreignKey: "id_equipo"});
  Equipos.hasMany(Rosters, { as: "Rosters", foreignKey: "id_equipo"});
  JuegosEquipos.belongsTo(Juegos, { as: "id_juego_Juego", foreignKey: "id_juego"});
  Juegos.hasMany(JuegosEquipos, { as: "JuegosEquipos", foreignKey: "id_juego"});
  Jugadores.belongsTo(Rosters, { as: "roster_Roster", foreignKey: "roster"});
  Rosters.hasMany(Jugadores, { as: "Jugadores", foreignKey: "roster"});

  return {
    Equipos,
    Juegos,
    JuegosEquipos,
    Jugadores,
    Rosters,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;

"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const juegos = await queryInterface.sequelize.query(
      `SELECT id_juego from Juegos;`
    );

    const equipos = await queryInterface.sequelize.query(
      `SELECT id_equipo from Equipos;`
    );

    const juegosRows = juegos[0];
    const equiposRows = equipos[0];

    return await queryInterface.bulkInsert(
      "JuegosEquipos",
      [
        {
          id_juego: juegosRows[0].id_juego,
          id_equipo: equiposRows[0].id_equipo,
        },
        {
          id_juego: juegosRows[1].id_juego,
          id_equipo: equiposRows[1].id_equipo,
        },
        {
          id_juego: juegosRows[2].id_juego,
          id_equipo: equiposRows[2].id_equipo,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("JuegosEquipos", null, {});
  },
};

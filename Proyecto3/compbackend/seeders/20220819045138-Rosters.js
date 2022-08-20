"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const equipos = await queryInterface.sequelize.query(
      `SELECT id_equipo from Equipos;`
    );

    const equipoRows = equipos[0];

    return await queryInterface.bulkInsert(
      "Rosters",
      [
        {
          id_equipo: equipoRows[0].id_equipo,
          partidas_jugadas: 120,
          campeonatos_jugados: 60,
        },
        {
          id_equipo: equipoRows[1].id_equipo,
          partidas_jugadas: 130,
          campeonatos_jugados: 70,
        },
        {
          id_equipo: equipoRows[2].id_equipo,
          partidas_jugadas: 140,
          campeonatos_jugados: 80,
        },
        {
          id_equipo: equipoRows[0].id_equipo,
          partidas_jugadas: 150,
          campeonatos_jugados: 90,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Rosters", null, {});
  },
};

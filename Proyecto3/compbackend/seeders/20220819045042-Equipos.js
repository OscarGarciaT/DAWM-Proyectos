"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert(
      "Equipos",
      [
        { nombre: "equipo 1", pais: "pais 1", activo: true, ganancias: 10000 },
        { nombre: "equipo 2", pais: "pais 2", activo: true, ganancias: 10000 },
        { nombre: "equipo 3", pais: "pais 3", activo: true, ganancias: 10000 },
        { nombre: "equipo 4", pais: "pais 4", activo: true, ganancias: 10000 },
        { nombre: "equipo 5", pais: "pais 5", activo: true, ganancias: 10000 },
        { nombre: "equipo 6", pais: "pais 6", activo: true, ganancias: 10000 },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Equipos", null, {});
  },
};

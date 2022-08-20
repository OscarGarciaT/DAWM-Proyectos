"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const rosters = await queryInterface.sequelize.query(
      `SELECT id_roster from Rosters;`
    );

    const rosterRows = rosters[0];

    return await queryInterface.bulkInsert(
      "Jugadores",
      [
        {
          nombre: "equipo 1",
          apellido: "apellido 1",
          nickname: "nickname 1",
          fecha_nacimiento: new Date("2003-07-15"),
          pais: "pais 1",
          activo: true,
          ganancias: 4000,
          descripcion:
            "Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion",
          roster: rosterRows[0].id_roster,
        },
        {
          nombre: "equipo 2",
          apellido: "apellido 2",
          nickname: "nickname 2",
          fecha_nacimiento: new Date("2003-07-15"),
          pais: "pais 2",
          activo: true,
          ganancias: 4000,
          descripcion:
            "Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion",
          roster: rosterRows[1].id_roster,
        },
        {
          nombre: "equipo 3",
          apellido: "apellido 3",
          nickname: "nickname 3",
          fecha_nacimiento: new Date("2003-07-15"),
          pais: "pais 3",
          activo: true,
          ganancias: 4000,
          descripcion:
            "Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion",
          roster: rosterRows[2].id_roster,
        },
        {
          nombre: "equipo 4",
          apellido: "apellido 4",
          nickname: "nickname 4",
          fecha_nacimiento: new Date("2003-07-15"),
          pais: "pais 4",
          activo: true,
          ganancias: 4000,
          descripcion:
            "Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion Descripcion",
          roster: rosterRows[3].id_roster,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Jugadores", null, {});
  },
};

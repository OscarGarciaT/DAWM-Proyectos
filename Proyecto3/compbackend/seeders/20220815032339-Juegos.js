"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    for (let i = 0; i < 50; i++) {
      await queryInterface.bulkInsert(
        "Juegos",
        [
          {
            nombre: "Juego Seed" + i,
            genero: "Genero",
            plataforma: "Plataforma",
            descripcion:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pulvinar, felis eu fermentum interdum, metus velit vehicula sem, eu bibendum sapien sapien sit amet tellus. Cras non nunc at risus gravida vulputate. Donec fermentum sem ac sodales duis.",
          },
        ],
        {}
      );
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Juegos", null, {
      truncate: true,
      cascade: true,
    });
  },
};

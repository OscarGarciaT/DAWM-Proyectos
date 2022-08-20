const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('JuegosEquipos', {
    id_juego: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Juegos',
        key: 'id_juego'
      }
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Equipos',
        key: 'id_equipo'
      }
    }
  }, {
    sequelize,
    tableName: 'JuegosEquipos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_juego" },
          { name: "id_equipo" },
        ]
      },
      {
        name: "id_equipo",
        using: "BTREE",
        fields: [
          { name: "id_equipo" },
        ]
      },
    ]
  });
};

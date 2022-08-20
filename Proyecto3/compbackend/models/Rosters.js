const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rosters', {
    id_roster: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_equipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Equipos',
        key: 'id_equipo'
      }
    },
    partidas_jugadas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    campeonatos_jugados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Rosters',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_roster" },
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

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Jugadores', {
    id_jugador: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nickname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ganancias: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    roster: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rosters',
        key: 'id_roster'
      }
    },
    descripcion: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Jugadores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_jugador" },
        ]
      },
      {
        name: "roster",
        using: "BTREE",
        fields: [
          { name: "roster" },
        ]
      },
    ]
  });
};

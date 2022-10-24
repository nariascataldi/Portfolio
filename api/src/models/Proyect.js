const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('proyect', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate:{
      //   isDate: true,
      // }
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    deploy: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate:{
      //   isUrl:{
      //     msg: "Must be a valid url address likes: (https://foo.com)" 
      //   }
      // }
    },
    video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    autor: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  });
};

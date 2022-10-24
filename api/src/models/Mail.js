const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('mail', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: { msg: "Must be a valid email address" },
      }
    },
    pass: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate:{
      //   isUrl:true
      // },
      defaultValue: "https://www.clipartmax.com/png/middle/330-3309899_argentina-rugby-union-logo.png"
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate:{
      //   isUrl:{
      //     msg: "Must be a valid url address likes: (https://foo.com)" 
      //   }
      // },
      defaultValue: "https://www.clipartmax.com/png/middle/330-3309899_argentina-rugby-union-logo.png"
    },
  });
};

const { Proyect, User } = require('../../db.js');


const getProyects = async () => {
  return await Proyect.findAll({
    include: {
      model: User,
      attribute: 'name',
    }
  })
};
module.exports = getProyects;
const { User, Mail } = require('../../db.js');

const getUser = async () => {
  return await User.findAll({
    include: {
      model: Mail,
      attribute: 'mail',
    }

  })
};
module.exports = getUser;
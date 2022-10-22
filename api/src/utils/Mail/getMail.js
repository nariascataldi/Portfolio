const { Mail, User } = require('../../db.js');


const getMail = async () => {
  return await Mail.findAll()
};
module.exports = getMail;
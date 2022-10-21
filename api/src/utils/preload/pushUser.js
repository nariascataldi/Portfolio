const User = require('../../db.js');
const jsonUser = require('../Data/user.json');

function pushUser() {
    try {
        for (let users in jsonUser) {
            console.log(jsonUser[users]);
            jsonUser[users].forEach(obj => {
                User.bulkCreate(obj)
            })
        }
        console.log('Usuarios cargados');
    } catch (error) {
        console.log('No se cargaron los usuarios')
    }
}

module.exports = pushUser;
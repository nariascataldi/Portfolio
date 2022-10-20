const User = require('../../db.js');
const jsonUser = require('../Data/user.json');

function pushUser() {
    try {
        for (let user in jsonUser) {
            jsonUser[user].forEach(obj => {
                User.create(obj)
            })
        }
    } catch (error) {
        console.log('No se cargaron los usuarios')
    }
}

module.exports = pushUser;
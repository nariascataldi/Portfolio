const Mail = require('../../db.js');
const jsonMail = require('../Data/mail.json');
// import jsonUser from '../Data/user.json';

function pushMail() {
    try {
        for (let mail in jsonMail) {
            jsonMail[mail].forEach(obj => {
                Mail.create(obj)
            })
        }
    } catch (error) {
        console.log('No se cargaron los mails')
    }
}
// function pushUser() {
//     try {
//         for (let user in jsonUser) {
//             jsonUser[user].forEach(obj => {
//                 User.create(obj)
//             })
//         }
//     } catch (error) {
//         console.log('No se cargaron los usuarios')
//     }
// }

module.exports = pushMail
const Mail = require('../../db.js');
const jsonMail = require('../Data/mail.json');

function pushMail() {
    try {
        for (let mail in jsonMail) {
            jsonMail[mail].forEach(obj => {
                Mail.bulkCreate(obj)
            })
        }
    } catch (error) {
        console.log('No se cargaron los mails')
    }
}

module.exports = pushMail;
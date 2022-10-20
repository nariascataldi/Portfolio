const Proyect = require('../../db.js');
const jsonProyect = require('../Data/proyect.json');

function pushProyect() {
    try {
        for (let proy in jsonProyect) {
            jsonProyect[proy].forEach(obj => {
                Proyect.create(obj)
            })
        }
    } catch (error) {
        console.log('No se cargaron los proyectos')
    }
}

module.exports = pushProyect
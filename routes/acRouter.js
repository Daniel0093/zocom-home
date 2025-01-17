const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');


// Här menar vi 'http://localhost:3000/ac/AC1/on'

router.get('/:id/on', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : true, temperature : 13 }) // Slå på enheten och ändra temperaturen till 13°
    .value();
    update();
    res.send('AC is on!')
})

router.get('/:id/off', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id }) 
    .assign({ on : false }) // Slå av enheten
    .value();
    update(); // berätta till frontend att uppdatera state

    res.send('AC is off!')
})

module.exports = router; // Exportera router till vår main fil ( index.js )
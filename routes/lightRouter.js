const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');

// Här menar vi 'http://localhost:3000/lights/:id/on'

router.get('/:id/on', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id }) 
    .assign({ on : true }) 
    .value();
    update();

    res.send(`Light with ID ( ${id} ) is on!`)
})

// Här menar vi 'http://localhost:3000/lights/:id/off'

router.get('/:id/off', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : false }) 
    .value();
    update(); 

    res.send(`Light with ID ( ${id} ) is off!`)
})

module.exports = router; // Exportera router till vår main fil ( index.js )
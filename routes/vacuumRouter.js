const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');

// Här menar vi 'http://localhost:3000/vacuum/VAC1/on'

router.get('/:id/on', (req, res) => {
    let id= req.params.id;
    console.log(id)
    db
    .get('devices')
    .find({ id : id }) 
    .assign({ on : true }) 
    .value();
    update();

    res.send('Vacuum starts cleaning!')
})

// Här menar vi 'http://localhost:3000/vacuum/VAC1/off'

router.get('/:id/off', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : false }) // Slå av enheten
    .value();
    update(); 

    res.send('Vacuum is off!')
})

module.exports = router; 
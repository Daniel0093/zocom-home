const { Router } = require('express');
const router = new Router();
const { db, update } = require('../db/index');

// Här menar vi 'http://localhost:3000/camera/CAM1/on'

router.get('/:id/on', (req, res) => {
    let id= req.params.id;
    console.log(id)
    db
    .get('devices')
    .find({ id : id }) // Leta reda på en viss ID - det som står efter kolon återfinns i req.params
    .assign({ on : true }) 
    .value();
    update();

    res.send('Camera is on and recording!')
})

// Här menar vi 'http://localhost:3000/camera/CAM1/off'

router.get('/:id/off', (req, res) => {
    let id= req.params.id;
    db
    .get('devices')
    .find({ id : id })
    .assign({ on : false }) 
    .value();
    update(); // berätta till frontend att uppdatera state

    res.send('Camera is off!')
})

module.exports = router; 
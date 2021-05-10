const express = require('express');
const router = express.Router({mergeParams: true});
const { Peeps } = require('../models')

router.get('/peeps', async (req, res) => {
    const peeps = await Peeps.findAll();
    res.render('chitter/peeps', {peeps: peeps});
});

router.post('/peeps', async (req, res) => {
    await Peeps.create({
        peep: req.body.peep
    });
    console.log(req.body.peep)
    res.redirect('chitter/peeps');
});

module.exports = router;
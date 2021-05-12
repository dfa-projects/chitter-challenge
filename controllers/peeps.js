const express = require('express');
const router = express.Router({mergeParams: true});
const { Users, Peeps } = require('../models');

router.get('/', (req, res) => {
    res.render('index', {error: []});
});

router.get('/peeps', async (req, res) => {
    const peeps = await Peeps.findAll({include: {all: true}});
    peeps.reverse()
    console.log(peeps)
    const users = await Users.findAll();
    res.render('chitter/index', {peeps: peeps, users: users, error: []});
});

router.post('/peeps', async (req, res) => {
    try {
        await Peeps.create({ peep: req.body.peep, UserId: req.session.UserId });
     res.redirect('/chitter/peeps'); 
     } catch (error) {
         console.log('in error');
         res.locals.errors = error.message
         res.render('register/index', {error: res.locals.errors})
     }
});


module.exports = router;
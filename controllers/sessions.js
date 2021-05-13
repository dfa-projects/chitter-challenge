const express = require('express');
const router = express.Router({mergeParams: true})
const bcrypt = require('bcryptjs');
const { Users } = require('../models');

router.get('/login', (req, res) => {
	res.render('sessions/index', {error: []});
});

router.post('/', async (req, res) => {
	const user = await Users.findOne({where: {email: req.body.email}})
	if(user && bcrypt.compareSync(req.body.password, user.password)) {
		req.session.UserId = user.id;
		res.redirect('/chitter/peeps');
	} else {
		res.locals.errors = 'Incorrect email or password';
		res.render('sessions/index', {error: res.locals.errors});
	}
});


module.exports = router;
const express = require('express');
const router = express.Router({mergeParams: true});
const { Users, Peeps } = require('../models');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

router.get('/new', (req, res) => {
    res.render('register/index', {error: []});
});

router.post('/', async (req, res) => {
	await Peeps.findAll();
    try {
		const hash = bcrypt.hashSync(req.body.password, salt);
		const user = await Users.create({
            name: req.body.name,
            username: req.body.username,
			email: req.body.email,
			password: hash
		});

		await Users.findAll();
		req.session.UserId = user.id;
		res.redirect('/chitter/peeps');

	} catch (error) {
		res.locals.errors = error.message
		res.render('register/index', {error: res.locals.errors});
	}
});


module.exports = router;
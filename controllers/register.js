const express = require('express');
const router = express.Router({mergeParams: true});
const { User } = require('../models');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

router.get('/new', (req, res) => {
    res.render('register/new');
});

router.post('/register', async (req, res) => {
	const hash = bcrypt.hashSync(req.body.password, salt);
	const user = await User.create({
		name: req.body.name,
		username: req.body.username,
		email: req.body.email,
		password: hash
	})
	
	res.redirect('chitter/peeps');
	
});

module.exports = router;
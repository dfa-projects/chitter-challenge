const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {error: []});
});

router.delete('/', (req, res) => {
	delete req.session.UserId;
	res.redirect('/');
});

module.exports = router;
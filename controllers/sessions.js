const express = require('express')
const router = express.Router({mergeParams: true})

router.get('/login', (req, res) => {
	res.render('sessions/login');
})

module.exports = router;
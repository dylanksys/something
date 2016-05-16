var router = require('express').Router();

// Change API methods and endpoint methods to fit your needs

router.get('/api/users', function(req, res) {
	res.send('Path: /api/users');
};

router.get('/api/magic', function(req, res) {
	res.send('Path: /api/magic');
};

module.exports = router;

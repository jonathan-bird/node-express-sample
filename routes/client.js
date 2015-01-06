var express = require('express');
var router = express.Router();

var clientList = [
	{
		'name': 'Jonathan Bird',
		'phone': 12345678
	},
	{
		'name': 'John Smith',
		'phone': 12345678
	},
	{
		'name': 'Ben Drake',
		'phone': 12345678
	}
];

/* GET client list page. */
router.get('/list', function(req, res) {
  res.json(clientList);
});

module.exports = router;

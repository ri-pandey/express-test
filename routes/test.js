var express = require('express');
const { query } = require('express-validator');
var router = express.Router();

router.get(
    '/boolTest',
    query('boolVal').default(true).toBoolean(),
    function(req, res, next) {
        res.send('received bool value:'+ req.query.boolVal);
});

module.exports = router;

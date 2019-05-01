const router = require('express').Router();

const usInterestRate = require('./us-interest-rate');

router.use('/us', usInterestRate);
module.exports = router;

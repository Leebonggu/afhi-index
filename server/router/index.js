const router = require('express').Router();

const usInterestRate = require('./us-interest-rate');
const pjwIndex = require('./pjw-index');
const leadingIndex = require('./leading-index');

router.use('/us', usInterestRate);
router.use('/us', pjwIndex);
router.use('/us', leadingIndex);

module.exports = router;

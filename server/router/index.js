const router = require('express').Router();

const usInterestRate = require('./us-interest-rate');
const pjwIndex = require('./pjw-index');
const leadingIndex = require('./leading-index');
const gdpIndex = require('./gdp-index');
const wtiPrice = require('./wti-price');

router.use('/us', usInterestRate);
router.use('/us', pjwIndex);
router.use('/us', leadingIndex);
router.use('/us', gdpIndex);
router.use('/us', wtiPrice);

module.exports = router;

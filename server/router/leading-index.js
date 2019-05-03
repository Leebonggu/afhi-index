const router = require('express').Router();
const { accumulateFredData } = require('../utils');

router.get('/leading-index', (req, res) => {
  const indexCodeName = {
    'M2': 'M2 Money Stock ',
    'M2(Percent Change from Year Ago)': 'M2 Money Stock(Percent Change from Year Ago)',
  };
  const indexCode = [
    'M2',
    'M2(Percent Change from Year Ago)',
  ];
  const allFredData = accumulateFredData(indexCodeName, indexCode);
  if(allFredData) {
    Promise.all(allFredData).then(value => {
      const usingForData = value.map(({ indexName, observations }) => {
        return {
          indexName,
          observations
        }
      });
      return res.send(usingForData);
    });
  }
});

module.exports = router;

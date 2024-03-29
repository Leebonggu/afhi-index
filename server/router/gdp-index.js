const router = require('express').Router();
const { accumulateFredData } = require('../utils');

router.get('/gdp-index', (req, res) => {
  const indexCodeName = {
  };
  const indexCode = [
  ];
  const allFredData = accumulateFredData(indexCodeName, indexCode);
  if(allFredData) {
    Promise.all(allFredData).then(value => {
      const usingForData = value.map(({
        indexName,
        differenceByOneDate,
        meanLatestThree,
        meanLatestSeven,
        meanLatestfifteen,
        meanLatestThirty,
        observations
      }) => {
        return {
          indexName,
          differenceByOneDate,
          meanLatestThree,
          meanLatestSeven,
          meanLatestfifteen,
          meanLatestThirty,
          observations,
        }
      });
      return res.send(usingForData);
    });
  }
});

module.exports = router;

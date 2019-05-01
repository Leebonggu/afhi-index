const router = require('express').Router();
const { accumulateFredData } = require('../utils');

router.get('/interest-rate', (req, res) => {
  const indexCodeName = {
    'FEDFUNDS': 'US Effective Federal Funds Rate',
    'CPIAUCSL': 'CPI: All Items(전체물가-Percent Change from Year Ago)',
    'CPILFESL': 'CPI: All Items Less Food and Energy(핵심물가-Percent Change from Year Ago)',
    'PAYEMS': ' All Employees: Total Nonfarm Payrolls(Percent Change from Year Ago)',
    'UNRATE': 'Civilian Unemployment Rate',
    'U6RATE': ' Total unemployed, plus all marginally attached workers plus total employed part time for economic reasons',
    'LES1252881600Q': 'Employed full time: Median usual weekly real earnings: Wage and salary workers: 16 years and over',
    'LNS11300060': 'Civilian Labor Force Participation Rate: 25 to 54 years',
    'AHETPI': 'Average Hourly Earnings of Production and Nonsupervisory Employees: Total Private(Percent Change from Year Ago)',
    'AWHMAN': 'Average Weekly Hours of Production and Nonsupervisory Employees: Manufacturing',
    'FRBKCLMCILA': 'KC Fed Labor Market Conditions Index, Level of Activity Indicator',
  };
  const indexCode = [
  'FEDFUNDS',
  'CPIAUCSL',
  'CPILFESL',
  'PAYEMS',
  'UNRATE',
  'U6RATE',
  'LES1252881600Q',
  'LNS11300060',
  'AHETPI',
  'AWHMAN',
  'FRBKCLMCILA'
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
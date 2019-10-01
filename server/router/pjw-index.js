// 발틱; x
// M2: o
// 미국국채수익률 10년 - 2년: o / fred
// 미국 주택 판매 지수
// 미국 신규주택 판매 지수
// 미국 주택 가격 지수: S & P CoreLogic Case-Shiller 주택 가격 지수는 주거용 부동산 가격의 주요 측정 지표이며 주거용 부동산 가치의 변화를 전국적으로뿐만 아니라 20 개 대도시 지역에서도 추적합니다. 추가 지수 목록은 S & P CoreLogic 사례 - 실러 주택 가격 지수 방법론을 참조하십시오.
// 미국 자동차 판매 지수: ㅇ
// 공장 가동률: Capacity Utilization: Total Industry

const router = require('express').Router();
const { accumulateFredData } = require('../utils');

router.get('/pjw-index', (req, res) => {
  const indexCodeName = {
    'M2': 'M2 Money Stock(Billions of Dollars)',
    'M2(Percent Change from Year Ago)': 'M2 Money Stock(Percent Change from Year Ago)',
    'T10Y2Y': ' 10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity',
    'EXHOSLUSM495S': 'Existing Home Sales(Number of Units,)',
    'HSN1F': 'New One Family Houses Sold: United States',
    'CSUSHPINSA': 'S&P/Case-Shiller U.S. National Home Price Index',
    'TOTALSA': 'Total Vehicle Sales',
    'TCU': 'Capacity Utilization: Total Industry',
  };
  const indexCode = [
    'M2',
    'M2(Percent Change from Year Ago)',
    'T10Y2Y',
    'EXHOSLUSM495S',
    'HSN1F',
    'CSUSHPINSA',
    'TOTALSA',
    'TCU'
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

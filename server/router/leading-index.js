// 선행지수, 동행지수
// 제조업체 생산직 근로자의 평균 주당 근로시간 - ㅇ
// 실업보험에 대한 최초의 평균 주당 지불청구 건수 - ㅇ
// 인플레이션으로 조정된 소비재 및 원료에 대한 신규주문
// 방위산업과 관련되지 않은 자본재에 대한 신규주문
// 공급업자 인도 지수
// 발행된 신축건물 허가
// 주가지수
// 인플레이션으로 조정된 통화공급(M2)
// 이자율 마진: 10년 만기 미국 재무성 증권과 3년 만기 미국 재무성 증권 사이의 수익 마진
// 소비자 기대지수

const router = require('express').Router();
const { accumulateFredData } = require('../utils');

router.get('/leading-index', (req, res) => {
  const indexCodeName = {
    'AWHMAN': 'Average Weekly Hours of Production and Nonsupervisory Employees: Manufacturing',
    'ICSA': 'Initial Claims(신규 실업수당 신청)',
    'UCNGNO': 'Value of Manufacturers\' New Orders for Consumer Goods: Consumer Nondurable Goods Industries (DISCONTINUED)',
    'NEWORDER': 'Manufacturers\' New Orders: Nondefense Capital Goods Excluding Aircraft',
    'PERMIT': 'New Private Housing Units Authorized by Building Permits',
    'SP500': 'S&P 500',
    'M2': 'M2 Money Stock ',
    'M2(Percent Change from Year Ago)': 'M2 Money Stock(Percent Change from Year Ago)',
    'T10Y2Y': '10-Year Treasury Constant Maturity Minus 2-Year Treasury Constant Maturity',
    'T10YFF': '10-Year Treasury Constant Maturity Minus Federal Funds Rate',
    'UMCSENT': 'University of Michigan: Consumer Sentiment',
  };
  const indexCode = [
    'AWHMAN',
    'ICSA',
    'UCNGNO',
    'NEWORDER',
    'PERMIT',
    'SP500',
    'M2',
    'M2(Percent Change from Year Ago)',
    'T10Y2Y',
    'T10YFF',
    'UMCSENT',
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

import React from 'react';
import { Statistic, Row, Col, Icon } from 'antd';

const ObservationsSummaryInformation = ({
    latestDate,
    latestValue,
    differenceByOneDate,
    meanLatestThree,
    meanLatestSeven,
    meanLatestfifteen,
    meanLatestThirty,
  }) => {
  const economicDataInfo = {
    '최근 관측시점':latestDate,
    '최근 관측값' : latestValue,
    '최근-1이전 차이':differenceByOneDate,
    '최근 3관측치 평균': meanLatestThree,
    '최근 7관측치 평균': meanLatestSeven,
    '최근 15관측치 평균': meanLatestfifteen,
    '최근 30관측치 평균': meanLatestThirty,
  };
  return (
    <div>
      <Row gutter={48}>
        {Object.entries(economicDataInfo).map(([name, value], index) => {
          return (
            < Col span={6} key={`${name}-${index}`}>
              {index > 0 ? (
                <Statistic
                  title={`${name}`}
                  value={value}
                  valueStyle={ value > 0 ? {
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#3f8600',
                  } : {
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#cf1322',
                  }}
                  prefix={
                    (value > 0 && name === '최근-이전 차이')
                    ? <Icon type="arrow-up" /> 
                    : (value < 0 && name === '최근-이전 차이') ?
                    <Icon type="arrow-down" /> 
                    : ""}
                  precision={4}
                />
              ) : (
                <Statistic
                  title={`${name}`}
                  value={value}
                  valueStyle={{ fontSize: '1rem', fontWeight: 700}}
                  precision={4}
                />
              )}
            </Col>
          )
        })}
      </Row>
    </div>
  );
};

export default ObservationsSummaryInformation;
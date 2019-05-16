import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IndexChart from '../visualize';
import ObservationsLatestInformation from '../visualize/observations-latest-info';

const FlexContainer = styled.div`
  flex: 8;
  width: 80%;
  height: 100%;
  margin-bottom: 1rem;
`;

const StyledHeaderTitle = styled.h1`
  margin: 1rem 0;
`;

const ObservationsLatestInfoContainer = styled.div`
  display: flex;
`;

const Descrtiption = styled.div`
  display: 'flex';
  flex-direction: column;
`;

const DescrtiptionScore = styled.span`
  text-decoration: underline;
  font-size: 1.2rem;
  color: #cf1322;
`;


class UsInterestRate extends Component {
  state = {
    intestRateData: [],
    latestInfoData: [],
  };

  componentDidMount() {
    axios.get(`/api/us/interest-rate`)
      .then(({data}) => {
        const filteredData = this.dataRefiningForLastestInfo(data);

        this.setState({ 
          intestRateData: data,
          latestInfoData: filteredData,
        });
      })
      .catch ((err) => {
        console.log(err);
      })
  };
  
  dataRefiningForLastestInfo = (data) => {
    const filteredList = [
      'US Effective Federal Funds Rate',
      'Civilian Unemployment Rate',
      'CPI: All Items Less Food and Energy(핵심물가-Percent Change from Year Ago)'
    ];
    return data.filter((eachData) => (
      filteredList.includes(eachData.indexName)
    ));
  };

  render() {
    const { intestRateData, latestInfoData } = this.state;
    const discription = ``;
    console.log(123, latestInfoData);
    return (
      <FlexContainer>
          <StyledHeaderTitle>미국 기준금리관련 지표</StyledHeaderTitle>
          <Descrtiption>
            2019년 5월 기준 미국기준금리는 <DescrtiptionScore>2.25~2.50%</DescrtiptionScore>(현지시간기준 12월19일 인상)이다. 미국 연방준비은행은 고용과 물가목표를 정해놓고 기준금리를 결정한다.<br />
            연준이 바라보는 이상적인 고용과 물가는 수준은 완전고용수준(<DescrtiptionScore>실업률 3~4%</DescrtiptionScore>), 물가상승률 <DescrtiptionScore>2%</DescrtiptionScore>이다. <br />
          </Descrtiption>
          <ObservationsLatestInfoContainer>
            {latestInfoData && <ObservationsLatestInformation usingData={latestInfoData} discription={discription} />}
          </ObservationsLatestInfoContainer>
          {intestRateData.length ? <IndexChart usingData={intestRateData}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default UsInterestRate;
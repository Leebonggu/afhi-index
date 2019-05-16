import React from 'react';
import styled from 'styled-components';

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeaderTitle = styled.h1`
  margin: 1rem 0;
`;

const DescrtiptionLatestInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const DescrtiptionLatestInfoContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; 
  justify-content: space-between;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid #005;
`;

const DescrtiptionScore = styled.span`
  text-decoration: underline;
  font-size: 1.2rem;
  color: #cf1322;
`;

const ObservationsLatestInformation = ({ usingData, discription })=> {
  return (
    <ContentsContainer>
      <StyledHeaderTitle>현재수준</StyledHeaderTitle>
      <DescrtiptionLatestInfoContainer>
        {usingData.map(({ indexName, observations }, index) => (
          <DescrtiptionLatestInfoContent key={`${indexName}-${index}`}>
            <h3>{indexName}</h3>
            <div style={{ fontSize: '1rem', color: '#001' }}>{observations[observations.length-1].date}</div>
            <div><DescrtiptionScore>{observations[observations.length-1].value}</DescrtiptionScore></div>
          </DescrtiptionLatestInfoContent>
        ))}
      </DescrtiptionLatestInfoContainer>
    </ContentsContainer>
  );
};

export default ObservationsLatestInformation;
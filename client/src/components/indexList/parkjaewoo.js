import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IndexChart from '../visualize';

const FlexContainer = styled.div`
  flex: 8;
  width: 80%;
  height: 100%;
  margin-bottom: 1rem;
`;

const StyledHeaderTitle = styled.h1`
  margin: 1rem 0;
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

class PJWIndex extends Component {
  state = {
    pjwIndexData: []
  }
  componentDidMount() {
    axios.get(`/api/us/pjw-index`)
      .then(({data}) => {
        this.setState({ pjwIndexData: data })
      })
      .catch ((err) => {
        console.log(err);
      })
  }
  render() {
    const { pjwIndexData } = this.state;
    console.log(pjwIndexData);
    return (
      <FlexContainer>
        <StyledHeaderTitle>PJW-Index</StyledHeaderTitle>
        <Descrtiption>
          PJW-Index는 카산드라 시스템에서 영향을 받아 만든 시스템이다. 미국 경제에 중요한 지표들을 선정해 그 지표들의 흐름을 관찰한다. <br />
          그리고 지표의 변화에 따라 경제위기 가능성 어떻게 변하는지 파악학 위한 시스템이다.<br />
        </Descrtiption>
        {pjwIndexData.length ? <IndexChart usingData={pjwIndexData}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default PJWIndex;
import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InterestRateLineCharts from '../visualize';

const FlexContainer = styled.div`
  flex: 8;
  width: 80%;
  height: 100%;
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
          {pjwIndexData.length ? <InterestRateLineCharts usingData={pjwIndexData}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default PJWIndex;
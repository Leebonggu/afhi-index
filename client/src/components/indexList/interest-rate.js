import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InterestRateLineCharts from '../visualize';

const FlexContainer = styled.div`
  flex: 8;
  width: 80%;
  height: 100%;
`;

class UsInterestRate extends Component {
  state = {
    intestRateData: []
  }
  componentDidMount() {
    axios.get(`/api/us/interest-rate`)
      .then(({data}) => {
        this.setState({ intestRateData: data })
      })
      .catch ((err) => {
        console.log(err);
      })
  }
  render() {
    const { intestRateData } = this.state;
    return (
      <FlexContainer>
          {intestRateData.length ? <InterestRateLineCharts usingData={intestRateData}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default UsInterestRate;
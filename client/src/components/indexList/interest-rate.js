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
          <div>
            설명과 최근상태가 들어간다.
          </div>
          {intestRateData.length ? <IndexChart usingData={intestRateData}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default UsInterestRate;
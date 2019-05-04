import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InterestRateLineCharts from '../visualize';

const FlexContainer = styled.div`
  flex: 8;
  width: 80%;
  height: 100%;
`;

class GDPIndex extends Component {
  state = {
    gdpIndexData: []
  }
  componentDidMount() {
    axios.get(`/api/us/gdp-index`)
      .then(({data}) => {
        this.setState({ gdpIndexData: data })
      })
      .catch ((err) => {
        console.log(err);
      })
  }
  render() {
    const { gdpIndexData } = this.state;
    return (
      <FlexContainer>
          {gdpIndexData.length ? <InterestRateLineCharts usingData={gdpIndexData}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default GDPIndex;
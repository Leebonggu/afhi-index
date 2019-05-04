import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import IndexChart from '../visualize';

const FlexContainer = styled.div`
  flex: 8;
  width: 80%;
  height: 100%;
`;

class WTIPrice extends Component {
  state = {
    witPriceIndex: []
  }
  componentDidMount() {
    axios.get(`/api/us/gdp-index`)
      .then(({data}) => {
        this.setState({ witPriceIndex: data })
      })
      .catch ((err) => {
        console.log(err);
      })
  }
  render() {
    const { witPriceIndex } = this.state;
    return (
      <FlexContainer>
          {witPriceIndex.length ? <IndexChart usingData={witPriceIndex}/>: 'Loading'}
      </FlexContainer>
    );
  }
}

export default WTIPrice;
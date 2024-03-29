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

class LeadingIndex extends Component {
  state = {
    leadingIndexData: []
  }
  componentDidMount() {
    axios.get(`/api/us/leading-index`)
      .then(({data}) => {
        this.setState({ leadingIndexData: data })
      })
      .catch ((err) => {
        console.log(err);
      })
  }
  render() {
    const { leadingIndexData } = this.state;
    console.log(leadingIndexData);
    return (
      <FlexContainer>
          {leadingIndexData.length ? <IndexChart usingData={leadingIndexData} />: 'Loading'}
      </FlexContainer>
    );
  }
}

export default LeadingIndex;
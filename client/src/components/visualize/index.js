import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styled from 'styled-components';


const ChartLayout = styled.div`
  width: 90%;
`;
const ChartContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 1rem 0rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

class InterestRateLineCharts extends Component {
  render() {
    const { usingData } = this.props;
    return (
      <ChartLayout>
        {usingData.map(({indexName, observations}, index) => {
          return (
          <ChartContainer key={`${indexName}-${(index + 1)*10}`}>
            <Title>{indexName}</Title>
            <ResponsiveContainer  width={800} height={400}>
              <LineChart
                data={observations}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey='date' />
                <YAxis />
                <Tooltip />
                <Line type="linear" dataKey="value" stroke="#8884d8" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        )})}
      </ChartLayout>
    );
  }
}

export default InterestRateLineCharts;

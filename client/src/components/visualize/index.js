import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styled from 'styled-components';


const ChartLayout = styled.div`
  width: 90%;
`;
const Container = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  display: 'flex'; 
  flex-direction: 'row';
`;

const ChartNumberInformation = styled.div`
  flex: 2;
`

const Title = styled.div`
  margin: 1rem 0rem;
  font-size: 1.5rem;
  font-weight: 700;
`;

class IndexChart extends Component {
  render() {
    const { usingData } = this.props;
    return (
      <div>
        <ChartLayout>
          {usingData.map(({indexName, observations}, index) => {
            return (
              <Container key={`${indexName}-${(index + 1)*10}`}>
                <Title>{indexName}</Title>
                <ChartContainer>
                  <ResponsiveContainer  width={800} height={400} style={{ flex: 8 }}>
                    <LineChart
                      data={observations}
                      margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey='date' />
                      <YAxis />
                      <Tooltip />
                      <Line type="linear" dataKey="value" stroke="#8884d8" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                  <ChartNumberInformation>gdddddddddddd</ChartNumberInformation>
                </ChartContainer>
              </Container>
          )})}
        </ChartLayout>
      </div>
    );
  }
}

export default IndexChart;

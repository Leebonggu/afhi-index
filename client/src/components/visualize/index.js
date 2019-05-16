import React, { Component } from 'react';
import { LineChart, ResponsiveContainer, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import styled from 'styled-components';
import ObservationsSummaryInformation from './observations-summary-info';

const ChartLayout = styled.div`
  width: 95%;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ChartContainer = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 1rem 0rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: black;
`;

const ChartNumberInformation = styled.div`
  flex: 2;
`;

class IndexChart extends Component {
  render() {
    const { usingData } = this.props;
    console.log('usingData', usingData);
    return (
      <div>
        <ChartLayout>
          {usingData.map(({
              indexName,
              differenceByOneDate,
              meanLatestThree,
              meanLatestSeven,
              meanLatestfifteen,
              meanLatestThirty,
              observations,
            }, 
            index
          ) => {
            const latestDate = observations[observations.length - 1].date;
            const latestValue = observations[observations.length - 1].value;
            return (
              <Container key={`${indexName}-${(index + 1)*10}`}>
                <Title>{indexName}</Title>
                <ChartContainer>
                  <ResponsiveContainer  width={800} height={400}>
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
                  <ChartNumberInformation>
                    <ObservationsSummaryInformation
                      latestDate={latestDate}
                      latestValue={latestValue}
                      differenceByOneDate={differenceByOneDate}
                      meanLatestThree={meanLatestThree}
                      meanLatestSeven={meanLatestSeven}
                      meanLatestfifteen={meanLatestfifteen}
                      meanLatestThirty={meanLatestThirty}
                    /> 
                  </ChartNumberInformation>
                </ChartContainer>
              </Container>
          )})}
        </ChartLayout>
      </div>
    );
  }
}

export default IndexChart;

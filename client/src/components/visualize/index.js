import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class InterestRateLineCharts extends Component {
  render() {
    const { intestRateData } = this.props;
    return (
      <div>
        {intestRateData.map(({indexName, observations}, index) => {
          return (
          <div key={`${indexName}-${(index + 1)*10}`}>
            <h1>{indexName}</h1>
            <LineChart
              width={1200}
              height={400}
              data={observations}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey='date' />
              <YAxis />
              <Tooltip />
              <Line type="linear" dataKey="value" stroke="#8884d8" dot={false} />
            </LineChart>
          </div>
        )})}
      </div>
    );
  }
}

export default InterestRateLineCharts;

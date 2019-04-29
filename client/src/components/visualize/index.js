import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

class WTILineCharts extends Component {
  render() {
    const { wtiPriceData } = this.props;
    return (
      <div>
        <h1>{wtiPriceData.name}</h1>
        <LineChart
          width={1200}
          height={400}
          data={wtiPriceData.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Line type="linear" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </div>
    );
  }
}

export default WTILineCharts;

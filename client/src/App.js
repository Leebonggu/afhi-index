import React, { Component } from 'react';
import axios from 'axios';
import InterestRateLineCharts from './components/visualize';



class App extends Component {
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
      <div>
        {intestRateData.length ? <InterestRateLineCharts intestRateData={intestRateData}/>: 'Loading'}
      </div>
    );
  }
}

export default App;

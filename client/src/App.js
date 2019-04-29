import React, { Component } from 'react';
import axios from 'axios';
import WTILineCharts from './components/visualize';



class App extends Component {
  state = {
    wtiPriceData: {},
  }
  componentDidMount() {
    axios.get(`/api/data`)
      .then(({data}) => {
        const wtiPrice = {
          name: 'WTI-PRICE',
          data,
        }
        this.setState({ wtiPriceData: wtiPrice })
      })
      .catch ((err) => {
        console.log(err);
      })
  }
  
  render() {
    const { wtiPriceData } = this.state;
    console.log(wtiPriceData);
    return (
      <div>
        {wtiPriceData.data ? <WTILineCharts wtiPriceData={wtiPriceData}/>: 'Loading'}
      </div>
    );
  }
}

export default App;

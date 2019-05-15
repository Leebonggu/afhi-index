import React, { Component, Fragment } from 'react';
import { BrowserRouter as Rotuer, Route, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Home, UsInterestRate, PJWIndex, LeadingIndex, GDPIndex, WTIPrice }from './components/indexList';
import MenuList from './components/menu';



const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0; 
`;

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const MenuContainer = styled.div`
  flex: 2;
`;

const RouteContainer = styled.div`
  flex: 8;
  margin-left: 1rem;
`;

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Layout>
          <Rotuer>
            <MenuContainer>
              <MenuList />
            </MenuContainer>
            <RouteContainer>
              <Route exact path="/" component={Home} />
              <Switch>
                <Route path="/us-interest-rate" component={UsInterestRate} />
                <Route path="/pjw-index" component={PJWIndex} />
                <Route path="/leading-index" component={LeadingIndex} />
                <Route path="/gdp-index" component={GDPIndex} />
                <Route path="/wti-price" component={WTIPrice} />
              </Switch>
            </RouteContainer>
          </Rotuer>
        </Layout>
      </Fragment>
    );
  }
}

export default App;

import React from 'react';
import MenuList from './menu';
import styled, { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Rotuer } from 'react-router-dom';
import Logo from '../../static/logo/afhi-economy.png';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  padding: 0; 
`;

const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  flex: 5;
  display: flex;
  border-bottom: 1px solid black;
`;

const Section = styled.div`
  flex: 95;
  display: flex;
`;

const MenuContainer = styled.div`
  flex: 2;
`;

const RouteContainer = styled.div`
  flex: 8;
  margin-left: 1rem;
`;

const StyledImg = styled.img`
  height: 7rem;
  margin: 0.5rem 0rem 0rem 1rem;
`;

const Layout = ({ children }) => {
  console.log(Logo)
  return (
    <>
      <GlobalStyle />
      <LayoutContainer>
        <Header>
          <StyledImg src={Logo} alt="logo" onClick={() => window.location ='/' } />
        </Header>
        <Section>
          <Rotuer>
            <MenuContainer>
              <MenuList />
            </MenuContainer>
            <RouteContainer>
                {children}
            </RouteContainer>
          </Rotuer>
        </Section>
      </LayoutContainer>
    </>
  )
};

export default Layout;


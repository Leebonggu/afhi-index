import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuDiv = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
position: fixed;  
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  margin: 0.5rem;
  text-decoration: none;
  font-size: 1.5rem;
  color: black;
  &:hover {
    background: black;
    color: white;
  }
`;

const Menu = () => (
  <MenuDiv>
    <MenuItem>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/us-interest-rate'>미국 기준금리 관련 지표</StyledLink>
      <StyledLink to='/leading-index'>선행지표</StyledLink>
      <StyledLink to='/pjw-index'>PJW-Index</StyledLink>
    </MenuItem>
  </MenuDiv>
);

export default Menu;
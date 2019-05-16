import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const MenuList = () => {
    return (
    <>
      <Menu mode="inline">
        <Menu.Item key="home">
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key="us-interest">
          <Link to='/us-interest-rate'>미국 기준금리 관련 지표</Link>
        </Menu.Item>
        <Menu.Item key="leading-index">
          <Link to='/leading-index'>선행지표</Link>
        </Menu.Item>
        <Menu.Item key="pjw-index">
           <Link to='/pjw-index'>PJW-Index</Link>
        </Menu.Item>
        <Menu.Item key="gdp-index">
          <Link to='/gdp-index'>GDP-Index</Link>
        </Menu.Item>
        <Menu.Item key="wti-price">
          <Link to='/wti-price'>WTI-Price-Index</Link>
        </Menu.Item>
      </Menu>
    </>
    )
};

export default MenuList;
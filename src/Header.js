import React from 'react';
import { Typography, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './Header.css';

const { Title } = Typography;

const Header = () => {
  return (
    <header className="header">
      <Menu mode="horizontal" className="header-menu">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="footage">
          <Link to="/footage">Footage</Link>
        </Menu.Item>
        {/*
        <Menu.Item key="polling">
          <Link to="/polling">Polling</Link>
        </Menu.Item>
        */}
      </Menu>
    </header>
  );
};

export default Header;

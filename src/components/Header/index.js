import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import './index.css';

const HeaderWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 72, 153, 1) 15.05%,
    rgba(0, 127, 200, 1) 100%
  );
  border-bottom: 0.1vw solid #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  width: 100%;
`;

const LogoWrapper = styled.h1`
  margin: 0 auto;
  padding: 2vw 0 3vw;
`;

const logoImgStyle = {
  maxWidth: '300px',
  width: '50vw'
};

// const List = styled.ul`
//   display: flex;
//   flex-direction: row;
//   list-style: none;
//   margin: 0 auto;
//   margin: 0.25em 0;
//   text-align: center;
//   width: 100%;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const ListItem = styled.li`
//   font-family: Myriad Pro, sans-serif;
//   font-size: 1.3rem;
//   margin-bottom: 0.35em;
//   text-decoration: none;
// `;

const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-style: italic;
  font-weight: bold;
`;

const headerLinkActiveStyle = {
  color: '#f2b006'
};

const Header = ({ logoSizes }) => (
  <HeaderWrapper>
    <LogoWrapper>
      <Link to="/">
        <Img alt="logo" sizes={logoSizes} style={{ ...logoImgStyle }} />
      </Link>
    </LogoWrapper>
    <Menu width="60vw">
      <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} exact to="/">
        Home
      </HeaderLink>
      <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} to="/overview">
        Overview
      </HeaderLink>
      <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} to="/instructions">
        Instructions
      </HeaderLink>
      <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} to="/contact">
        Contact
      </HeaderLink>
    </Menu>
  </HeaderWrapper>
);

export default Header;

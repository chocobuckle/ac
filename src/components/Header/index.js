import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 72, 153, 1) 15.05%,
    rgba(0, 127, 200, 1) 100%
  );
  display: flex;
  flex-direction: column;
`;

const LogoWrapper = styled.h1`
  margin: 0 auto;
  padding: 2vw 0 3vw;
`;

const logoImgStyle = {
  maxWidth: '300px',
  width: '65vw'
};

const List = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0 auto;
  margin: 0.25em 0;
  text-align: center;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListItem = styled.li`
  font-family: Myriad Pro, sans-serif;
  font-size: 1.3rem;
  margin-bottom: 0.35em;
  text-decoration: none;
`;

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
  <div>
    <HeaderWrapper>
      <LogoWrapper>
        <Link to="/">
          <Img alt="logo" sizes={logoSizes} style={{ ...logoImgStyle }} />
        </Link>
      </LogoWrapper>
      <nav>
        <List>
          <ListItem style={{ textAlign: 'right', paddingRight: '4.5vw', width: '50%' }}>
            <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} exact to="/">
              Home
            </HeaderLink>
          </ListItem>
          <ListItem style={{ textAlign: 'left', paddingLeft: '4.5vw', width: '50%' }}>
            <HeaderLink
              activeStyle={{ ...headerLinkActiveStyle }}
              to="/overview">
              Overview
            </HeaderLink>
          </ListItem>
          <ListItem style={{ textAlign: 'right', paddingRight: '4.5vw', width: '50%' }}>
            <HeaderLink
              activeStyle={{ ...headerLinkActiveStyle }}
              to="/instructions">
              Instructions
            </HeaderLink>
          </ListItem>
          <ListItem style={{ textAlign: 'left', paddingLeft: '4.5vw', width: '50%' }}>
            <HeaderLink
              activeStyle={{ ...headerLinkActiveStyle }}
              to="/contact">
              Contact
            </HeaderLink>
          </ListItem>
        </List>
        <div style={{ borderRight: '0.1125em solid #fff', height: '3.6em', width: 0, margin: '-4.15em auto 0.65em' }} />
      </nav>
    </HeaderWrapper>
  </div>
);

export default Header;

import React from 'react';
import GatsbyLink from 'gatsby-link';
import GatsbyImage from 'gatsby-image';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(0, 72, 153, 1) 15.05%,
    rgba(0, 127, 200, 1) 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  max-width: 960;
`;

const LogoWrapper = styled.h1`
  padding-left: 1.5em;
  margin: 0;
`;

const LogoImg = styled(GatsbyImage)`
  width: 200px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`;

const ListItem = styled.li`
  font-family: Myriad Pro;
  text-decoration: none;
  color: black;
  margin-right: 1em;
`;

const Link = styled(GatsbyLink)`
  color: #fff;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
`;

const Header = ({ logoSizes }) => (
  <div>
    <HeaderWrapper>
      <LogoWrapper>
        <Link to="/">
          <LogoImg alt="logo" sizes={logoSizes} />
        </Link>
      </LogoWrapper>
      <nav>
        <List>
          <ListItem>
            <Link activeStyle={{ color: '#F2B006' }} exact to="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link activeStyle={{ color: '#F2B006' }} to="/overview">
              Overview
            </Link>
          </ListItem>
          <ListItem>
            <Link activeStyle={{ color: '#F2B006' }} to="/instructions">
              Instructions For Use
            </Link>
          </ListItem>
          <ListItem>
            <Link activeStyle={{ color: '#F2B006' }} to="/contact">
              Contact
            </Link>
          </ListItem>
        </List>
      </nav>
    </HeaderWrapper>
  </div>
);

export default Header;

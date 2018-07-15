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
  flex-direction: column;
  list-style: none;
  margin: 0 auto;
  margin-bottom: 1vw;
  text-align: center;
`;

const ListItem = styled.li`
  font-family: Myriad Pro;
  font-size: 6vw;
  margin-bottom: 2vw;
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
          <ListItem>
            <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} exact to="/">
              Home
            </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink
              activeStyle={{ ...headerLinkActiveStyle }}
              to="/overview">
              Overview
            </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink
              activeStyle={{ ...headerLinkActiveStyle }}
              to="/instructions">
              Instructions For Use
            </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink
              activeStyle={{ ...headerLinkActiveStyle }}
              to="/contact">
              Contact
            </HeaderLink>
          </ListItem>
        </List>
      </nav>
    </HeaderWrapper>
  </div>
);

export default Header;

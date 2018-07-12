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
  flex-direction: column;
`;

const LogoWrapper = styled.h1`
  margin: 0 auto;
  padding: 2vw 0 3vw;
`;

const LogoImg = styled(GatsbyImage)`
  width: 65vw;
  max-width: 300px;
`;

const logoImgStyle = {
  marginBottom: 0
};

const List = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 1vw;
`;

const ListItem = styled.li`
  font-family: Myriad Pro;
  text-decoration: none;
  font-size: 6vw;
  margin-bottom: 2vw;
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
          <LogoImg alt="logo" imgStyle={logoImgStyle} sizes={logoSizes} />
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

import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import styled from 'styled-components';
import './index.css';

const HeaderWrapper = styled.div`
  background: linear-gradient(90deg, rgba(0, 72, 153, 1) 15.05%, rgba(0, 127, 200, 1) 100%);
  border-bottom: 0.1vw solid #fff;
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 3;
  width: 100%;

  @media screen and (min-width: 600px) {
    background: linear-gradient(90deg, rgba(0, 72, 153, 1) 31%, rgba(0, 127, 200, 1) 100%);
    border-bottom: 0;
    flex-direction: row;
    position: relative;
    justify-content: flex-end;
  }
`;

const MobileAndTabletLogoWrapper = styled.h1`
  margin: 0 auto;
  padding: 2vw 0 3vw;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const MobileAndTabletLogo = styled(Img)`
  max-width: 300px;
  width: 50vw;

  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const DesktopLogoWrapper = styled.h1`
  display: none;
  @media screen and (min-width: 600px) {
    display: block;
    background: rgba(0, 72, 153, 1);
    position: absolute; /* change to absolute */
    padding: 0.35em 0.125em 0.375em;
    left: 1em;
    top: -0.16em;
  }
`;

const DesktopLogo = styled(Img)`
  max-width: 220px;
  width: 22vw;
  position: relative;
  top: 0.025em;

  @media screen and (min-width: 996px) {
    width: 219.109px;
  }
`;

const List = styled.ul`
  display: none;
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    width: 70%;
    justify-content: space-evenly;
  }
`;

const ListItem = styled.li`
  font-family: Myriad Pro, sans-serif;
  font-size: 3.45vw;
  margin: 0.5em 0.5em;
  text-decoration: none;

  @media screen and (min-width: 996px) {
    font-size: 34.362px;
  }
`;

const HeaderLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-style: italic;
  font-weight: 600;
`;

const headerLinkActiveStyle = {
  color: '#f2b006'
};

class Header extends Component {
  state = {
    isOpen: false
  };

  handleStateChange = (state) => {
    this.setState({ isOpen: state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { logoSizes } = this.props;
    const { isOpen } = this.state;
    return (
      <HeaderWrapper>
        <DesktopLogoWrapper>
          <Link to="/">
            <DesktopLogo alt="logo" sizes={logoSizes} />
          </Link>
        </DesktopLogoWrapper>
        <List>
          <ListItem>
            <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} exact to="/">
              Home
            </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} to="/overview">
              Overview
            </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} to="/instructions">
              Instructions
            </HeaderLink>
          </ListItem>
          <ListItem>
            <HeaderLink activeStyle={{ ...headerLinkActiveStyle }} to="/contact">
              Contact
            </HeaderLink>
          </ListItem>
        </List>
        <MobileAndTabletLogoWrapper>
          <Link to="/">
            <MobileAndTabletLogo
              alt="logo"
              sizes={logoSizes}
            />
          </Link>
        </MobileAndTabletLogoWrapper>
        <Menu width="60vw" isOpen={isOpen} onStateChange={(state) => this.handleStateChange(state)}>
          <HeaderLink
            onClick={() => this.closeMenu()}
            activeStyle={{ ...headerLinkActiveStyle }}
            exact
            to="/">
            Home
          </HeaderLink>
          <HeaderLink
            onClick={() => this.closeMenu()}
            activeStyle={{ ...headerLinkActiveStyle }}
            to="/overview">
            Overview
          </HeaderLink>
          <HeaderLink
            onClick={() => this.closeMenu()}
            activeStyle={{ ...headerLinkActiveStyle }}
            to="/instructions">
            Instructions
          </HeaderLink>
          <HeaderLink
            onClick={() => this.closeMenu()}
            activeStyle={{ ...headerLinkActiveStyle }}
            to="/contact">
            Contact
          </HeaderLink>
        </Menu>
      </HeaderWrapper>
    );
  }
}

export default Header;

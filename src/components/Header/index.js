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
    background: linear-gradient(90deg, rgba(0, 72, 153, 1) 55%, rgba(0, 127, 200, 1) 100%);
    flex-direction: row;
    justify-content: flex-start;
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
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

const mobileAndTabletLogoStyle = {
  maxWidth: '300px',
  width: '50vw'
};

const desktopLogoStyle = {
  maxWidth: '300px',
  width: '25vw',
  position: 'relative',
  bottom: '0.25em' /* scale */
};

const DesktopLogo = styled(Img)`
  display: none;

  @media screen and (min-width: 600px) {
    display: block;
  }
`;

const DesktopLogoWrapper = styled.h1`
  display: none;
  margin: 0;
  @media screen and (min-width: 600px) {
    display: block;
    background: rgba(0, 72, 153, 1);
    margin-left: 1em;
    position: relative;
    top: 0.5em; /* scale */
  }
`;

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
        <MobileAndTabletLogoWrapper>
          <Link to="/">
            <MobileAndTabletLogo
              alt="logo"
              sizes={logoSizes}
              style={{ ...mobileAndTabletLogoStyle }}
            />
          </Link>
        </MobileAndTabletLogoWrapper>
        <DesktopLogoWrapper>
          <Link to="/">
            <DesktopLogo alt="logo" sizes={logoSizes} style={{ ...desktopLogoStyle }} />
          </Link>
        </DesktopLogoWrapper>
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

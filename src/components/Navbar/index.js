import React from 'react';
import logo from '../../images/logo.jpg'
import { IoMenuOutline } from 'react-icons/io5';
import { 
  Nav,  
  NavLogo,
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
          <NavLogo src={logo} alt="logo"/>
          <MobileIcon onClick={toggle}>
            <IoMenuOutline />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="home"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact={"true"}
              >Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="about" 
                smooth={true} 
                duration={500} 
                spy={true} 
                exact={true}
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="portfolio"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact={true}
              >Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="contact"
                smooth={true} 
                duration={500} 
                spy={true} 
                exact={true}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
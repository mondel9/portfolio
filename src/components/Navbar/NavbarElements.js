import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll';


export const Nav = styled.nav`
    padding-left: 6.25vw;
    padding-right: 6.25vw;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 500;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavLogo = styled.img`
    /*justify-self: flex-start;*/
    float: left;
    max-width: 80px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.5em;
    height: 100%;
    cursor: pointer;

    &.active {
        text-decoration: underline;
        border-bottom: 3px solid var(--text);
    }
    
    &:hover {
        text-decoration: underline;
        text-underline-offset: 10px;
        transition: 0.2s ease-in-out;
      }
`



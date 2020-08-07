import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import breakpoints from './styled/breakpoints';

const StyledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 5vh;
    background: ${props => props.theme.primaryColor };
    border-radius: 1rem;
`;

const StyledUL = styled.ul`
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
`;

const StyledLink = styled(NavLink)`
    color: ${props => props.theme.accentColor };
    text-decoration: none;
    transition: all 0.1s;
    &.active {
        color:${(props) => props.theme.secondaryColor};
        font-weight: bold;
    }
    &:hover {
        color:${(props) => props.theme.secondaryColor};
        font-weight: bold;
    }
`;

const Logo = styled.h3`
    color:${(props) => props.theme.secondaryColor}; 
    font-size: 1.7rem;
    margin: 0;
    font-family: 'Niconne', cursive;
    @media ${breakpoints.w430} {
        font-size: 1.2rem;
        margin-left: .5rem;
    }
`;

const Nav: React.FC = () => {
    return ( 
        <StyledNav>
            <Logo>Home Finder</Logo>
            <StyledUL>
                <StyledLink to='/houses' exact>
                    <li>Find a home</li>
                </StyledLink>
                <StyledLink to='/contact' exact>
                    <li>Contact</li>
                </StyledLink>
            </StyledUL>
        </StyledNav>
        
    );
};

export default Nav;
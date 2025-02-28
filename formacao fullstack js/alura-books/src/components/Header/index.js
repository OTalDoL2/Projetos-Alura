import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import React from 'react';


const AppHeader = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <AppHeader>
            <Link to="/">
                <Logo />
            </Link>
            <HeaderOptions />
            <HeaderIcons />
        </AppHeader>
    )
}

export default Header
import Logo from '../Logo';
import HeaderOptions from '../HeaderOptions';
import HeaderIcons from '../HeaderIcons'
import styled from 'styled-components'

const AppHeader = styled.header`
    background-color: #ffffff;
    display: flex;
    justify-content: center;
`

function Header(){
    return(
        <AppHeader>
            <Logo />

            <HeaderOptions />
            <HeaderIcons />           
        </AppHeader>
    )
}

export default Header
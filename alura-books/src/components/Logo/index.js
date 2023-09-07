import logo from '../../assets/logo.svg';
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

// width: 35%;
const LogoImage = styled.img`
  margin-right: 10px;
`

function Logo(){
    return (
        <LogoContainer>
          <LogoImage className='logo-img' src={logo} alt="Logo da Alura Books"/>
          <p> <strong> Alura</strong>Books </p>
        </LogoContainer>
    );
}
export default Logo;
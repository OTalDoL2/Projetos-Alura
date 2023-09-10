import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'
import styled from 'styled-components'

const icons = [perfil, sacola]

const Icone = styled.li`
  list-style: none;
  margin-right: 40px;
  width: 25px;
`
const Icones = styled.ul`
  display: flex;
  align-items: center;
`

function HeaderIcons(){
    return (
        <Icones>
          {/* para colocar um js, usa-se {} */}
          { icons.map((icon) => (
              <Icone> <img src={icon} alt="" /> </Icone>
          )) }
        </Icones>
    )
}

export default HeaderIcons
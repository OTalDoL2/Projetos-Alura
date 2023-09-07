import './styles.css'
import perfil from '../../assets/perfil.svg'
import sacola from '../../assets/sacola.svg'


const icons = [perfil, sacola]

function HeaderIcons(){
    return (
        <ul className="icons">
          {/* para colocar um js, usa-se {} */}
          { icons.map((icon) => (
            <li className="icon">
              <img src={icon} alt="" />
            </li>
          )) }
        </ul>
    )
}

export default HeaderIcons
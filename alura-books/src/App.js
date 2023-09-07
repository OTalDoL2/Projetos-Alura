import './App.css';
import Logo from './components/Logo';
import perfil from './assets/perfil.svg'
import sacola from './assets/sacola.svg'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']
const icons = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className="menu">
          {/* para colocar um js, usa-se {} */}
          { optionsText.map((texto) => (
            <li className="option"><p>{texto}</p></li>
          )) }
        </ul>

        <ul className="icons">
          {/* para colocar um js, usa-se {} */}
          { icons.map((icon) => (
            <li className="icon">
              <img src={icon} alt="" />
            </li>
          )) }
        </ul>
      </header>
    </div>
  );
}

export default App;

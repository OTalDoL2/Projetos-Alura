import './App.css';
import Logo from './components/Logo';
import HeaderOptions from './components/HeaderOptions';
import HeaderIcons from './components/HeaderIcons'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />

        <HeaderOptions />
        <HeaderIcons />

        
      </header>
    </div>
  );
}

export default App;

import Header from './components/Header';
import SearchBar from './components/Search';
import LastRelease from './components/LastRelease';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `
  // background-image: linear-gradient(90deg, #fd8325, #cc490d);

function App() {
  return (
    <AppContainer>
      <Header />
      <SearchBar />
      <LastRelease />
    </AppContainer>
      
  );
}

export default App;

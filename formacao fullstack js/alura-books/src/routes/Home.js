import SearchBar from '../components/Search';
import LastRelease from '../components/LastRelease';
import styled from 'styled-components';
import React from 'react';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `
  // background-image: linear-gradient(90deg, #fd8325, #cc490d);

function Home() {
  return (
    <AppContainer>
      
      <SearchBar />
      <LastRelease />
    </AppContainer>
      
  );
}

export default Home;

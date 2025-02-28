import SearchBar from '../components/Search';
import styled from 'styled-components';
import React from 'react';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  `
  // background-image: linear-gradient(90deg, #fd8325, #cc490d);

function Favorites() {
  return (
    <AppContainer>
      <SearchBar />
    </AppContainer>
      
  );
}

export default Favorites;

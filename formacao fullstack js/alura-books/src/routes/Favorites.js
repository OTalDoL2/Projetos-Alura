import { useEffect, useState } from 'react';
import styled from 'styled-components'
import livroImg from '../assets/livro2.png'
import { getFavorites } from '../services/favorites';


const AppContainer = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const response = await getFavorites()
    setFavorites(response)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favorites.length !== 0 ? favorites.map(favorite => (
              <Resultado>
                <p>{favorite.nome}</p>
                <img src={livroImg} alt={favorite.nome} />
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}


export default Favorites
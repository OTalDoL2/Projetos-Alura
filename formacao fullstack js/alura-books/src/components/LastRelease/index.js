import styled from 'styled-components'
import { livros } from './lastReleaseData'
import {Title} from '../Titulo'
import RecommendCard from '../RecommendCard'
import imagemLivro from '../../assets/livro2.png'

const LastReleaseContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastRelease(){
    return(
        <LastReleaseContainer>
            {/* <Titulo texto="Últimos Lançamentos" /> */}
            <Title fontSize="36px" 
                   alignText="center">
                Últimos Lançamentos
                </Title>
            <NewBooksContainer>
                {livros.map(livro => (
                    <img src={livro.src} alt="" />
                ))}
            </NewBooksContainer>
            <RecommendCard title="Angular" description="não sei" img={imagemLivro} />
            <RecommendCard title="React" description="não sei" img={imagemLivro} />
        </LastReleaseContainer>
    )
}

export default LastRelease
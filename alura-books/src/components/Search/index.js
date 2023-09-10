import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './searchData'
import { Title } from '../Titulo'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #fd8325, #cc490d);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`


const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`


function SearchBar(){
    const [searchedBooks, setSearchedBooks] = useState([])

    return(
        <SearchContainer>
            <Title fontSize="36px" color="#fff">Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input type="text" placeholder="Escreva sua próxima leitura" onBlur={e => {
                const typedText = e.target.value
                const searchResult = livros.filter(livro => livro.nome.includes(typedText))
                setSearchedBooks(searchResult)
                console.log(searchedBooks)
                // setSearchedBooks(find e.target.value)
            }}/>
            { searchedBooks.map( livro => (
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </div>
            )) }
        </SearchContainer>
    )
}

export default SearchBar
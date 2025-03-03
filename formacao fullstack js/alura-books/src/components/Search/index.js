import Input from '../Input'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Title } from '../Titulo'
import { getBooks } from '../../services/books'
import React from 'react'
import livroImage from '../../assets/livro.png'

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

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`


function SearchBar() {
    const [searchedBooks, setSearchedBooks] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const livrosDaAPI = await getBooks()
        setBooks(livrosDaAPI)
    }


    return (
        <SearchContainer>
            <Title color="#fff">Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input type="text"
                placeholder="Escreva sua próxima leitura"
                onBlur={e => {
                    const typedText = e.target.value
                    const searchResult = books.filter(book => book.nome.includes(typedText))
                    setSearchedBooks(searchResult)
                }} />
            {searchedBooks.map(livro => (
                <Result  key={livro.id}>
                    <p>{livro.nome}</p>
                    <img src={livroImage} alt={livro.nome} />
                </Result>
            ))}
        </SearchContainer>
    )
}

export default SearchBar
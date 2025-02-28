import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'

const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

const Menu = styled.ul`
    display: flex;
`

const Option = styled.li`
    font-size: 16px;
    display: flex;
    
    justify-content: center;
    align-items: center;
    text-align: center;

    height: 100%;
    min-width: 120px;

    padding: 0 5px;
    cursor: pointer;

`

function HeaderOptions() {
    return (
        <>
            <Menu>
                {/* para colocar um js, usa-se {} */}
                {optionsText.map((texto) => (
                    <Link to={`/${texto.toLowerCase()}`}><Option><p>{texto}</p></Option></Link>
                ))}
            </Menu>
        </>
    )
}

export default HeaderOptions
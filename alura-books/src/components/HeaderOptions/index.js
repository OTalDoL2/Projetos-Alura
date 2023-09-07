
const optionsText = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS']

function HeaderOptions(){
    return(
        <>
            <ul className="menu">
            {/* para colocar um js, usa-se {} */}
            { optionsText.map((texto) => (
                <li className="option"><p>{texto}</p></li>
                )) }
            </ul>
        </>
    )
}

export default HeaderOptions
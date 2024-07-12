import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from './components/Cabecalho'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import Filtro from './components/Filtro'
import Galeria from './components/Galeria'
import { useState } from 'react'

const FundoGradiente = styled.div`
    background: linear-gradient(
        174.61deg,
        #041833 4.16%,
        #04244f 48%,
        #154580 96.76%
    );

    min-height: 100vh;
    width: 100%;
`

const ContainerEstilizado = styled.div`
    display: grid;
    grid-template-columns: 1fr 11fr;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
    }
`

function App() {
    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <FundoGradiente onClick={menu && handleMenu}>
            <EstilosGlobais />
            <Cabecalho menu={menu} setMenu={setMenu} handleMenu={handleMenu} />
            <ContainerEstilizado>
                <BarraLateral menu={menu} />
                <main>
                    <Banner />
                    <Filtro />
                    <Galeria />
                </main>
            </ContainerEstilizado>
        </FundoGradiente>
    )
}

export default App

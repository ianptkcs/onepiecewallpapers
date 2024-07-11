import styled from 'styled-components'
import EstilosGlobais from './components/EstilosGlobais'
import Cabecalho from './components/Cabecalho'
import BarraLateral from './components/BarraLateral'
import Banner from './components/Banner'
import Filtro from './components/Filtro'
import Galeria from './components/Galeria'

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
`

function App() {
    return (
        <FundoGradiente>
            <EstilosGlobais />
            <Cabecalho />
            <ContainerEstilizado>
                <BarraLateral />
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

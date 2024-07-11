import FotoGaleria from './FotoGaleria'
import FotoPopulares from './FotoPopulares'
import GaleriaJson from '../../galeria.json'
import styled from 'styled-components'

const GaleriaEstilizada = styled.div`
    margin: 2rem 2.5%;
    gap: 2rem;
    display: grid;
    grid-template-columns: 3fr 1fr;

    div {
        h2 {
            margin: 0;
            margin-bottom: 2rem;
            font-size: 2.5rem;
            color: #7b78e5;
            text-align: start;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }

        .foto-galeria {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .foto-populares {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
    }
`

const Galeria = () => {
    const GaleriaOrdenadaJson = [...GaleriaJson].sort(
        (a, b) => b.likes - a.likes
    )

    return (
        <GaleriaEstilizada>
            <div>
                <h2>Navegue pela galeria</h2>
                <ul className="foto-galeria">
                    {GaleriaJson.map((foto) => (
                        <FotoGaleria key={foto.id} foto={foto} />
                    ))}
                </ul>
            </div>
            <div>
                <h2>Populares</h2>
                <ul className="foto-populares">
                    {GaleriaOrdenadaJson.map((foto) => (
                        <FotoPopulares key={foto.id} foto={foto} />
                    ))}
                </ul>
            </div>
        </GaleriaEstilizada>
    )
}

export default Galeria

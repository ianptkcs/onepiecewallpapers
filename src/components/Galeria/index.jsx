import FotoGaleria from './FotoGaleria'
import FotoPopulares from './FotoPopulares'
import GaleriaJson from '../../galeria.json'
import styled from 'styled-components'
import Backdrop from './Backdrop'
import { useState } from 'react'

const GaleriaEstilizada = styled.div`
    margin: 2rem 2.5%;
    gap: 2rem;
    display: grid;
    grid-template-columns: 3fr 1fr;

    div {
        gap: 1rem;

        h2 {
            margin: 0;
            margin-bottom: 2rem;
            font-size: 1.5rem;
            color: #7b78e5;
            text-align: start;
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
        }
    }
`

const ListaGaleriaEstilizada = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
`

const ListaPopularesEstilizada = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

const Galeria = () => {
    const GaleriaOrdenadaJson = [...GaleriaJson].sort(
        (a, b) => b.likes - a.likes
    )

    const [expandida, setExpandida] = useState(null)

    const handleExpandir = (foto) => {
        setExpandida(foto)
    }

    const handleFechar = () => {
        setExpandida(null)
    }

    return (
        <GaleriaEstilizada>
            <div>
                <h2>Navegue pela galeria</h2>
                <ListaGaleriaEstilizada>
                    {GaleriaJson.map((foto) => (
                        <FotoGaleria
                            key={foto.id}
                            foto={foto}
                            handleExpandir={() => handleExpandir(foto)}
                        />
                    ))}
                </ListaGaleriaEstilizada>
            </div>
            <div>
                <h2>Populares</h2>
                <ListaPopularesEstilizada>
                    {GaleriaOrdenadaJson.map((foto) => (
                        <FotoPopulares key={foto.id} foto={foto} />
                    ))}
                </ListaPopularesEstilizada>
            </div>
            {expandida != null && (
                <Backdrop expandida={expandida} handleFechar={handleFechar} />
            )}
        </GaleriaEstilizada>
    )
}

export default Galeria

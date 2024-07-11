import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExpandIcon from './assets/expand-icon.svg'
import HeartLiked from './assets/heart-liked.png'
import HeartNotLiked from './assets/heart-not-liked.png'
import { useState } from 'react'

const FotoGaleriaEstilizada = styled.li`
    border-radius: 1rem;
    background: #001634;
    display: grid;
    grid-template-rows: 13fr 7fr;

    img {
        width: 100%;
        object-fit: cover;
    }

    div {
        height: auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        color: white;
        font-size: 1.2rem;
        padding-left: 2rem;

        div {
            padding-right: 2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                cursor: pointer;
                width: 3rem;
            }
        }
    }
`

const FotoGaleria = ({ foto }) => {
    const [liked, setLiked] = useState([])

    const handleLike = () => {
        if (liked.includes(foto.id)) {
            setLiked(liked.filter((id) => id !== foto.id))
            foto
        } else {
            setLiked([...liked, foto.id])
            foto.likes--
        }
    }

    return (
        <FotoGaleriaEstilizada>
            <img src={foto.url} alt={foto.titulo}></img>
            <div>
                <h3>{foto.titulo}</h3>
                <div>
                    <img
                        src={`${
                            liked.includes(foto.id) ? HeartLiked : HeartNotLiked
                        }`}
                        onClick={handleLike}
                    />
                    <img src={ExpandIcon} />
                </div>
            </div>
        </FotoGaleriaEstilizada>
    )
}

FotoGaleria.propTypes = {
    foto: PropTypes.string.isRequired,
}

export default FotoGaleria

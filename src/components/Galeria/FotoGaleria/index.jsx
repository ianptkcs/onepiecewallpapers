import PropTypes from 'prop-types'
import styled from 'styled-components'
import ExpandIcon from './assets/expand-icon.svg'
import HeartLikedIcon from './assets/heart-liked-icon.png'
import HeartNotLikedIcon from './assets/heart-not-liked-icon.png'
import { useState } from 'react'

const FotoGaleriaEstilizada = styled.li`
    border-radius: 1rem;
    background: #001634;
    display: grid;
    grid-template-rows: 13fr 7fr;

    @media (max-width: 1200px) {
        grid-template-rows: 10fr 3fr;
    }

    @media (max-width: 700px) {
        grid-template-rows: 7fr 2fr;
    }

    @media (max-width: 570px) {
        grid-template-rows: 4fr 2fr;
    }

    img {
        width: 100%;
        object-fit: cover;
        cursor: pointer;
    }

    div {
        height: auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        align-items: center;
        color: white;
        font-size: 1rem;

        @media (max-width: 700px) {
            font-size: 0.8rem;
        }

        padding-left: 1rem;

        div {
            padding-right: 2rem;
            display: flex;
            align-items: center;
            justify-content: end;
            gap: 2rem;

            img {
                cursor: pointer;
                width: 2rem;
                @media (max-width: 700px) {
                    width: 1.5rem;
                }
                @media (max-width: 570px) {
                    width: 1rem;
                }
            }
        }
    }
`

const FotoGaleria = ({ foto, handleExpandir }) => {
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
            <img
                src={foto.url}
                alt={foto.titulo}
                onClick={handleExpandir}
            ></img>
            <div>
                <h3>{foto.titulo}</h3>
                <div>
                    <img
                        src={`${
                            liked.includes(foto.id)
                                ? HeartLikedIcon
                                : HeartNotLikedIcon
                        }`}
                        onClick={handleLike}
                    />
                    <img src={ExpandIcon} onClick={handleExpandir} />
                </div>
            </div>
        </FotoGaleriaEstilizada>
    )
}

FotoGaleria.propTypes = {
    foto: PropTypes.string.isRequired,
    handleExpandir: PropTypes.func.isRequired,
}

export default FotoGaleria

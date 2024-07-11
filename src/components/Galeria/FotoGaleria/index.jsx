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
        padding-left: 1rem;

        div {
            padding-right: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;

            img {
                cursor: pointer;
                width: 2rem;
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

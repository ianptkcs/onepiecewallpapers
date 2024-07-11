import styled from 'styled-components'
import PropTypes from 'prop-types'

const FotoPopularesEstilizada = styled.li`
    img {
        border-radius: 1rem;
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

const FotoPopulares = ({ foto }) => {
    return (
        <FotoPopularesEstilizada>
            <img src={foto.url}></img>
        </FotoPopularesEstilizada>
    )
}

FotoPopulares.propTypes = {
    foto: PropTypes.string.isRequired,
}

export default FotoPopulares

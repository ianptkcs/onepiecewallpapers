import styled from 'styled-components'
import PropTypes from 'prop-types'
import CloseIcon from './assets/close-icon.png'

const BackdropEstilizado = styled.dialog`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;

    img {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60%;
        height: auto;
        cursor: auto;
    }

    button {
        background: transparent;
        border: none;
        cursor: pointer;

        img {
            position: fixed;
            top: calc(0% + 3rem);
            left: calc(100% - 3rem);
            width: 2rem;
            cursor: pointer;
        }
    }
`

const Backdrop = ({ expandida, handleFechar }) => {
    const handleCliqueInterno = (event) => {
        event.stopPropagation()
    }

    return (
        <BackdropEstilizado open={expandida} onClick={handleFechar}>
            <img
                src={expandida.url}
                alt={`Expandida ${expandida.titulo}`}
                onClick={handleCliqueInterno}
            />
            <button onClick={handleFechar}>
                <img src={CloseIcon} alt="Fechar" />
            </button>
        </BackdropEstilizado>
    )
}

Backdrop.propTypes = {
    expandida: PropTypes.oneOfType([
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            titulo: PropTypes.string.isRequired,
        }),
        PropTypes.null,
    ]).isRequired,
    handleFechar: PropTypes.func.isRequired,
}

export default Backdrop

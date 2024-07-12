import InicioIcon from './assets/inicio-icon.svg'
import MaisCurtidos from './assets/mais-curtidos-icon.svg'
import MaisVistos from './assets/mais-vistos-icon.svg'
import MaisRecentes from './assets/mais-recentes-icon.svg'
import SurpreendaMe from './assets/surpreenda-me-icon.svg'
import styled from 'styled-components'
import { useState } from 'react'
import PropTypes from 'prop-types'

const pages = [
    { name: 'Início', icon: InicioIcon },
    { name: 'Mais curtidos', icon: MaisCurtidos },
    { name: 'Mais vistos', icon: MaisVistos },
    { name: 'Mais recentes', icon: MaisRecentes },
    { name: 'Surpreenda-me', icon: SurpreendaMe },
]

const GradienteRosa = 'linear-gradient(90deg, #c98cf1 0%, #7b78e5 100%)'
const TextoRoxo = '#7B78E5'

const AsideEstilizada = styled.aside`
    background-color: #001634;
    nav {
        position: sticky;
        top: 18vh;
    }

    @media (max-width: 900px) {
        position: relative;
        visibility: hidden;
        nav {
            visibility: ${({ menu }) => menu && 'visible'};
            z-index: 100;
            background-color: #001634;
            padding: 0 0 1rem 0;
            font-size: 2rem;
            position: absolute;
            top: 0;
        }
    }
`

const UlEstilizado = styled.ul`
    padding: 0 1rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    margin: 0;
`

const ItemEstilizado = styled.li`
    div {
        display: flex;
        align-items: center;
        justify-content: left;

        a {
            width: fit-content;
            display: flex;

            align-items: center;
            gap: 0.8rem;
            text-decoration: none;

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.2rem;
                border-radius: 0.5rem;
                img {
                    width: 1.5rem;
                    height: auto;
                }
            }

            span {
                white-space: nowrap;
                font-size: 1rem;
                color: #ffffff;
            }
        }

        .pagina-selecionada {
            div {
                background: ${GradienteRosa};
            }
            span {
                color: ${TextoRoxo};
            }
        }
    }
`

const BarraLateral = ({ menu }) => {
    const [currentPage, setCurrentPage] = useState(pages[0])

    const handlePageChange = (page) => {
        setCurrentPage(page)
    }

    return (
        <AsideEstilizada menu={menu}>
            <nav>
                <UlEstilizado>
                    {pages.map((page, index) => (
                        <ItemEstilizado key={index}>
                            <div>
                                <a
                                    href="#"
                                    onClick={() => {
                                        handlePageChange(page)
                                    }}
                                    className={`${
                                        currentPage === page &&
                                        'pagina-selecionada'
                                    } `}
                                >
                                    <div>
                                        <img src={page.icon} alt={page.name} />
                                    </div>
                                    <span>{page.name}</span>
                                </a>
                            </div>
                        </ItemEstilizado>
                    ))}
                </UlEstilizado>
            </nav>
        </AsideEstilizada>
    )
}

BarraLateral.propTypes = {
    menu: PropTypes.bool.isRequired,
}
export default BarraLateral

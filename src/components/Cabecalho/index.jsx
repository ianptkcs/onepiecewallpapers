import styled from 'styled-components'
import LogoImg from '../../../public/logo.png'
import SearchIcon from './assets/search-icon.svg'
import MenuIcon from './assets/menu-icon.png'
import CloseIcon from './assets/close-icon.svg'
import { useState } from 'react'
import PropTypes from 'prop-types'

const CorTexto = '#FFFFFF'
const CorBorda = '#C98CF1'

const HeaderEstilizado = styled.header`
    padding: 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background: #001634;
    z-index: 3;
    height: 7vh;

    .menu {
        @media (min-width: 900px) {
            display: none;
        }

        @media (max-width: 900px) {
            height: 2.7rem;
        }
        @media (max-width: 400px) {
            height: 2.5rem;
        }
    }

    @media (max-width: 900px) {
        justify-content: space-between;
    }
`

const LogoEstilizada = styled.div`
    .logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        @media (max-width: 900px) {
            justify-content: center;
        }

        img {
            height: 5rem;
            @media (max-width: 900px) {
                height: 4rem;
            }
            @media (max-width: 400px) {
                height: 3rem;
            }
        }

        span {
            @media (max-width: 900px) {
                display: none;
            }
            color: ${CorTexto};
            font-size: 1.5rem;
            align-self: center;
        }
    }
`

const SearchBarEstilizada = styled.div`
    .search {
        display: flex;
        align-items: center;
        justify-content: space-between;

        form {
            input {
                border: 2px solid ${CorBorda};
                border-radius: 5px;
                padding: 0.8rem;
                padding-left: 1.2rem;
                font-size: 1.2rem;
                background: transparent;
                width: 50vw;
                min-width: 300px;
                max-width: 800px;
                color: ${CorTexto};

                @media (max-width: 900px) {
                    width: 35vw;
                    min-width: 200px;
                    font-size: 0.8rem;
                }

                @media (max-width: 400px) {
                    min-width: 150px;
                    font-size: 0.6rem;
                }
            }
        }
        img {
            position: absolute;
            right: calc(2.5% + 1rem);
            width: calc(2.2rem + 0%);
            @media (max-width: 900px) {
                width: 1.5rem;
            }
            @media (max-width: 400px) {
                width: 1.2rem;
            }
        }
    }
`

const Logo = () => {
    return (
        <div className="logo">
            <img src={LogoImg}></img>
            <span>
                <strong>OP</strong> Wallpapers
            </span>
        </div>
    )
}

const SearchBar = () => {
    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    return (
        <div className="search">
            <form onSubmit={setSearch}>
                <input
                    type="text"
                    placeholder="Digite o que você procura"
                    value={search}
                    onChange={handleSearch}
                ></input>
            </form>
            <img src={SearchIcon} />
        </div>
    )
}

const Cabecalho = ({ menu, handleMenu }) => {
    return (
        <HeaderEstilizado>
            <img
                className="menu"
                src={menu ? MenuIcon : CloseIcon}
                onClick={handleMenu}
            />
            <LogoEstilizada>
                <Logo></Logo>
            </LogoEstilizada>
            <SearchBarEstilizada>
                <SearchBar></SearchBar>
            </SearchBarEstilizada>
        </HeaderEstilizado>
    )
}

Cabecalho.propTypes = {
    menu: PropTypes.bool.isRequired,
    handleMenu: PropTypes.func.isRequired,
}

export default Cabecalho

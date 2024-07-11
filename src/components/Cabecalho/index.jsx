import styled from 'styled-components'
import LogoImg from '../../../public/logo.png'
import SearchIcon from './assets/search-icon.svg'
import { useState } from 'react'

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
    height: 10vh;
`

const LogoEstilizada = styled.div`
    .logo {
        display: flex;
        align-items: center;
        gap: 0.8rem;
        img {
            max-width: 15%;
        }
        span {
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
        position: relative;

        form {
            input {
                border: 2px solid ${CorBorda};
                border-radius: 5px;
                padding: 0.8rem;
                padding-left: 1.2rem;
                font-size: 1.2rem;
                width: 32rem;
                background: transparent;

                color: ${CorTexto};
            }
        }
        img {
            position: absolute;
            right: 1rem;
            width: 2.2rem;
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

const Cabecalho = () => {
    return (
        <HeaderEstilizado>
            <LogoEstilizada>
                <Logo></Logo>
            </LogoEstilizada>
            <SearchBarEstilizada>
                <SearchBar></SearchBar>
            </SearchBarEstilizada>
        </HeaderEstilizado>
    )
}

export default Cabecalho

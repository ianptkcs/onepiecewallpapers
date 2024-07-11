import styled from 'styled-components'
import Tags from './tags.json'
import { useState } from 'react'

const TagsEstilizadas = styled.div`
    margin: 1.5rem calc(2.5% + 1rem);
    display: flex;
    align-items: center;
    gap: 1.5rem;

    span {
        color: #d9d9d9;
        font-size: 1.1rem;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        padding: 0;

        li {
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            border: 2px solid;
            border-color: transparent;
            background: rgba(217, 217, 217, 0.3);
            cursor: pointer;

            span {
                color: #ffffff;
            }
        }

        .tag-selecionada {
            background: rgba(217, 217, 217, 0.5);
            border-color: #7b78e5;
        }
    }
`

const Filtro = () => {
    const [tagSelecionada, setTagSelecionada] = useState([])

    const handleTagSelecionada = (tag) => {
        if (tagSelecionada.includes(tag)) {
            setTagSelecionada(tagSelecionada.filter((item) => item !== tag))
        } else {
            setTagSelecionada([...tagSelecionada, tag])
        }
    }

    return (
        <TagsEstilizadas>
            <span>Filtre por tags:</span>
            <ul>
                {Tags.map((tag) => (
                    <li
                        className={`${
                            tagSelecionada.includes(tag.id) && 'tag-selecionada'
                        }`}
                        key={tag.id}
                        onClick={() => handleTagSelecionada(tag.id)}
                    >
                        <span>{tag.name}</span>
                    </li>
                ))}
            </ul>
        </TagsEstilizadas>
    )
}

export default Filtro

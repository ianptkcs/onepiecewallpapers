import styled from 'styled-components'
import BannerImg from './assets/banner.jpg'

const BannerEstilizado = styled.div`
    display: flex;
    position: relative;
    height: 35vh;

    @media (max-width: 900px) {
        margin-top: 2rem;
        height: calc(35vh + 2rem);
    }

    img {
        position: absolute;
        width: 95%;
        height: 100%;
        object-fit: cover;
        object-position: 20% 65%;
        z-index: 1;
        margin: 0 2.5%;
        border-radius: 2rem;
    }

    span {
        width: 40%;
        margin-left: calc(2.5% + 2rem);
        z-index: 2;
        align-content: center;

        text-align: left;
        font-size: 2rem;

        @media (max-width: 900px) {
            font-size: 1.5rem;
        }

        @media (max-width: 500px) {
            font-size: 1.2rem;
        }

        font-weight: 400;
        color: #ffffff;
    }
`

const Banner = () => {
    return (
        <BannerEstilizado>
            <span>A galeria mais completa de wallpapers de One Piece</span>
            <img src={BannerImg}></img>
        </BannerEstilizado>
    )
}

export default Banner

import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';

function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hola, soy <span>Sofía Freire</span></h1>
                <p>
                Soy Sofía Freire.
                Artista plática ecuatoriana, graduada de la "Universidad central del Ecuador".</p>
                <p>Actualmente ejerciendo en docencia.  </p>
                
                <div className="icons">
                    <a href="https://www.facebook.com/sofia.freire.963" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/sofia.freire.963/?hl=es-la" className="icon i-instagram">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
   
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;

        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }

            .i-instagram{
                &:hover{
                    border: 2px solid pink;
                    color: pink;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
        }
    }
`;

export default HomePage;

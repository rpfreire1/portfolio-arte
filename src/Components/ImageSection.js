import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>Una fusión  <span>del arte conceptual</span> y el abstracto</h4>
                <p className="paragraph">
                Tengo trabajo variado en diferentes técnicas.
Con ellas busco indagar en el dibujo y la pintura como un ejercicio de práctica y reflejo de dibujo propio.
Mientras que en la sección de cerámica y escultura  me gusta entablar una relación entre la cerámica y el cuerpo.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Nombre: </p>
                        <p>Edad: </p>
                        <p>Nacionalidad: </p>
                        <p>Idiomas: </p>
                        <p>Residencia: </p>
                        <p>Servicios: </p>
                    </div>
                    <div className="info">
                        <p>: Sofía Elizabeth Freire Peñafiel</p>
                        <p>: 24</p>
                        <p>: Ecuatoriana </p>
                        <p>: Español, Inglés </p>
                        <p>: Quito, Ecuador</p>
                        <p>: Docencia, Gestión de proyectos, Freelance, Comunity Manager</p>
                    </div>
                </div>
                <PrimaryButton title={'Descargar Cv'} />
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;

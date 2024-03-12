import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import ServiceCard from './ServiceCard';
import design from '../img/design.png';
import intelligence from '../img/intelligence.png';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Servicios'} span={'Servicios'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Docencia'} 
                        paragraph={'Docencia en idioma inglés, en artes plásticas.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Exposiciones artísticas'} 
                            paragraph={'Montaje y desarrollo de exposiciones artísticas, con experiencia en la gestión de proyectos artísticos.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'Encargos de obras de arte'} 
                        paragraph={'Encargos bajo pedido de todo tipo de obras de arte.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;

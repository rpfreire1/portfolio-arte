import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Mis habilidades'} span={'Mis habilidades'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Docencia de inglés'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'Artes gráficas'}
                            width={'90%'}
                            text={'90%'}
                        />
                        <ProgressBar 
                            title={'Docencia de artes plásticas'}
                            width={'95%'}
                            text={'95%'}
                        />
                        <ProgressBar 
                            title={'Desarrollo y gestión de proyectos artísticos'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Arte terapia'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'Community management'}
                            width={'90%'}
                            text={'90%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;

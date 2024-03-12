import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Logros académicos obtenidos'} span={'Logros académicos obtenidos'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Experiencia laboral'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'2018'} 
                        title={'Profesor de inglés'}
                        subTitle={'INED'}
                        text={'Tutorías personalizadas en el área de inglés, nivel intermedio alto.'} 
                    />
                    <ResumeItem 
                        year={'2019'} 
                        title={'Asistente de cátedra de grabado'}
                        subTitle={'Facultad de artes plásticas Universidad Central del Ecuador'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2020'} 
                        title={'Traductor'}
                        subTitle={'Universidad Central del Ecuador'}
                        text={'Traductor del proyecto Turn la Tola entre la Universidad Central del Ecuador y Universidad de Tokio'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                <ResumeItem 
                        year={'2020'} 
                        title={'Participación en el seminario Apuntes para educación inespecífica en el arte contemporáneo'}
                        subTitle={'Universidad Central del Ecuador'}
                        text={''} 
                    />
                <ResumeItem 
                        year={'2020'} 
                        title={'Licenciatura en artes plásticas'}
                        subTitle={'Universidad Central del Ecuador'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2018'} 
                        title={'Participación del proyecto de formación de pymes'}
                        subTitle={'Universidad politécnica salesiana'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'2015 - 2016'} 
                        title={'B1 inglés'}
                        subTitle={'CEC Escuela Politécnica Nacional'}
                        text={'Certificación B1'} 
                    />
                    <ResumeItem 
                        year={'2009 - 2014'} 
                        title={'Estudios secundarios'}
                        subTitle={'Colegio La Salle'}
                        text={''} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume

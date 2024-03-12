import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import ServicesSection from '../Components/ServicesSection';
import ReviewsSection from '../Components/ReviewsSection';



function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
            <Title title={'Sobre mi'} span={'Sobre mi'} />  
            <ImageSection />
            <ServicesSection />
                <ReviewsSection />
            </AboutStyled >
        </MainLayout>
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage
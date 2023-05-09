import React from 'react';
import { Container } from '../components/layout/container';

import { HeaderSection } from '../sections/header.section';
import { Title } from '../components/title/title.component';
import { CarsInfoSection } from '../sections/cars-info.section';
import { DescriptionSection } from '../sections/description.section';
import { CarouselSection } from '../sections/carousel.section';

import { PreFooterSection } from '../sections/pre-footer.section';
import { Footer } from '../components/footer/footer.component';

export const Landing = () => {
    return (
        <Container maxWidth="lg">
            <HeaderSection />
            <Title />
            <CarsInfoSection />
            <DescriptionSection />
            <CarouselSection />
            <PreFooterSection />
            <Footer />
        </Container>
    );
};

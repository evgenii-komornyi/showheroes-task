import React from 'react';
import { Section } from '../components/layout/section';

import { Title } from '../components/carousel/title.component';
import { Carousel } from '../components/carousel/carousel.component';
import { CustomButton } from '../components/custom-button/custom-button.component';

import { FindButtonContainer } from '../components/custom-button/custom-button.styles';

export const CarouselSection = () => {
    return (
        <Section
            style={{
                background: '#ffffff',
                padding: '40px 0',
            }}
        >
            <Title />
            <Carousel />
            <FindButtonContainer>
                <CustomButton text="Find forhandler" />
            </FindButtonContainer>
        </Section>
    );
};

import React from 'react';
import { Container, TitleContainer, TitleText } from './title.styles';

export const Title = () => {
    return (
        <Container>
            <TitleContainer>
                <TitleText>megane e-tech 100%</TitleText>
            </TitleContainer>

            <TitleText style={{ color: '#fefefe' }}>electric</TitleText>
        </Container>
    );
};

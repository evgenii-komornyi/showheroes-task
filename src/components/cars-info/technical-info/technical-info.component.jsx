import React from 'react';
import useCarsStore from '../../../app/useCarsStore';

import {
    InfoContainer,
    PropertyContainer,
    TechnicalInfoContainer,
    TechnicalInfoItemContainer,
    TextContainer,
} from './technical-info.styles';

export const TechnicalInfo = () => {
    const {
        technicalInfo: { motor, acceleration, test, restoredRange },
    } = useCarsStore(state => state.selectedCar);

    return (
        <TechnicalInfoContainer>
            <TechnicalInfoItemContainer>
                <InfoContainer>motor</InfoContainer>
                <PropertyContainer>{motor.capacity}</PropertyContainer>
                <TextContainer>{motor.text}</TextContainer>
            </TechnicalInfoItemContainer>
            <TechnicalInfoItemContainer>
                <InfoContainer>acceleration</InfoContainer>
                <PropertyContainer>{acceleration.time}</PropertyContainer>
                <TextContainer>{acceleration.text}</TextContainer>
            </TechnicalInfoItemContainer>
            <TechnicalInfoItemContainer>
                <InfoContainer>op til</InfoContainer>
                <PropertyContainer>{test.distance}</PropertyContainer>
                <TextContainer>{test.text}</TextContainer>
            </TechnicalInfoItemContainer>
            <TechnicalInfoItemContainer>
                <InfoContainer>op til</InfoContainer>
                <PropertyContainer>{restoredRange.range}</PropertyContainer>
                <TextContainer>{restoredRange.text}</TextContainer>
            </TechnicalInfoItemContainer>
        </TechnicalInfoContainer>
    );
};

import React from 'react';
import useCarsStore from '../../../app/useCarsStore';

import { Colors } from './colors/colors.component';

import {
    CarPickerContainer,
    ColorName,
    ImageContainer,
} from './car-picker.styles';

export const CarPicker = () => {
    const { selectedCar, selectedColor, image } = useCarsStore();

    return (
        <CarPickerContainer>
            <ImageContainer>
                <img src={image} alt={selectedCar.model} />;
            </ImageContainer>
            <ColorName>{selectedColor}</ColorName>
            <Colors />
        </CarPickerContainer>
    );
};

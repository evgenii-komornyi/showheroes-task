import React from 'react';
import useCarsStore from '../../../app/useCarsStore';

import { Colors } from './colors/colors.component';

import {
    CarPickerContainer,
    ColorName,
    ImageContainer,
} from './car-picker.styles';

export const CarPicker = () => {
    const selectedCar = useCarsStore(state => state.selectedCar);
    const selectedColor = useCarsStore(state => state.selectedColor);
    const image = useCarsStore(state => state.image);

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

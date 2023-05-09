import React from 'react';
import useCarsStore from '../../../../app/useCarsStore';

import { Color } from './color.component';

import { ColorsContainer } from './colors.styles';

export const Colors = () => {
    const { selectedCar } = useCarsStore();

    return (
        <ColorsContainer>
            {selectedCar.colors.map(color => (
                <div key={color.id}>
                    <Color color={color} />
                </div>
            ))}
        </ColorsContainer>
    );
};

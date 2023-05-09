import React from 'react';
import useCarsStore from '../../../../app/useCarsStore';

import { ColorImage, ColorImageContainer } from './colors.styles';

export const Color = ({ color: { id, name, color } }) => {
    const { selectedColor, selectColor } = useCarsStore();

    return (
        <ColorImageContainer>
            <ColorImage
                src={color}
                alt={id}
                className={`${name === selectedColor ? 'selected' : ''}`}
                onClick={() => selectColor(id, name)}
            />
        </ColorImageContainer>
    );
};

import React from 'react';
import { SectionContainer } from './section.styles';

export const Section = ({ children, style = {}, className = '' }) => {
    return (
        <SectionContainer style={style} className={className}>
            {children}
        </SectionContainer>
    );
};

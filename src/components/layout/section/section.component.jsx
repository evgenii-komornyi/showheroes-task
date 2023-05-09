import React from 'react';
import { SectionContainer } from './section.styles';

export const Section = ({ children, style = {} }) => {
    return <SectionContainer style={style}>{children}</SectionContainer>;
};

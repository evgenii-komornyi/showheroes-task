import React from 'react';

import { MainContainer } from './container.styles';

export const Container = ({ maxWidth, children, style = {} }) => {
    return (
        <MainContainer maxWidth={maxWidth} style={style}>
            {children}
        </MainContainer>
    );
};

import React from 'react';
import {
    ButtonsContainer,
    FooterContainer,
    Logo,
    LogoContainer,
} from './footer.styles';

import LogoSource from '../../assets/logo.png';
import { CustomButton } from '../custom-button/custom-button.component';

export const Footer = () => {
    return (
        <FooterContainer>
            <LogoContainer>
                <Logo src={LogoSource} />
            </LogoContainer>
            <ButtonsContainer>
                <CustomButton text="Find forhandler" />
                <CustomButton className="margin-left" text="BOOK EN PROVETUR" />
            </ButtonsContainer>
        </FooterContainer>
    );
};

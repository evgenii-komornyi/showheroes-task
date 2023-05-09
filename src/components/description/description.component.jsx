import React from 'react';

import {
    DescriptionButton,
    DescriptionButtonContainer,
    DescriptionContainer,
    DescriptionParagraph,
    DescriptionTitle,
    ImageBackgroundContainer,
    ImageBackgroundTitle,
    TitleContainer,
} from './description.styles';

export const Description = () => {
    return (
        <ImageBackgroundContainer>
            <TitleContainer>
                <ImageBackgroundTitle>
                    Genopfindelse <span className="shadowed">af elbilen</span>
                </ImageBackgroundTitle>
                <DescriptionContainer>
                    <DescriptionTitle>opladningsløsninger</DescriptionTitle>
                    <DescriptionParagraph>
                        Der står et bredt udvalg af bruger tilpassede løsninger
                        til din rådighed for opladning i hjemmet, på arbejdet
                        eller på vejen. Renault Megane E-Tech 100% electric
                        leveres med et mode 3 type 2 kabel, der kan bruges til
                        en Wallbox i hjemmet eller på en offentlig ladestation.
                    </DescriptionParagraph>
                    <DescriptionButtonContainer>
                        <DescriptionButton>
                            lÆs mere om opladning
                        </DescriptionButton>
                    </DescriptionButtonContainer>
                </DescriptionContainer>
            </TitleContainer>
        </ImageBackgroundContainer>
    );
};

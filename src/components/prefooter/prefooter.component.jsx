import React from 'react';

import { Paragraph, TextContainer } from './prefooter.styles';

export const PreFooter = () => {
    return (
        <TextContainer>
            <Paragraph>
                Renault Privatleasing via ALD Automotive. Alle priser er
                vejledende og baseret pa 36 maneder med en bindingsoeriode pa 12
                maneder. Inkl. Service- & vedligeholdelsesaftale, eksklusiv
                daek, obligatorisk kaskoforsikring og gron ejerafgift. Positiv
                kreditvurdering samt betaling via betalingsservice forudsaettes.
                Der tages forbehold for pris- & afgiftsaendringer samt trykfejl.
            </Paragraph>
        </TextContainer>
    );
};

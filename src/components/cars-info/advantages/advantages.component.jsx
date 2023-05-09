import React from 'react';
import useCarsStore from '../../../app/useCarsStore';

import {
    AdvantagesContainer,
    AdvantagesItem,
    AdvantagesList,
} from './advantages.styles';

export const Advantages = () => {
    const { advantages } = useCarsStore(({ selectedCar }) => selectedCar);

    return (
        <AdvantagesContainer>
            <AdvantagesList>
                <AdvantagesItem>{advantages[0]}</AdvantagesItem>
                <AdvantagesItem>{advantages[1]}</AdvantagesItem>
                <AdvantagesItem>{advantages[2]}</AdvantagesItem>
            </AdvantagesList>
            <AdvantagesList>
                <AdvantagesItem>{advantages[3]}</AdvantagesItem>
                <AdvantagesItem>{advantages[4]}</AdvantagesItem>
            </AdvantagesList>
        </AdvantagesContainer>
    );
};

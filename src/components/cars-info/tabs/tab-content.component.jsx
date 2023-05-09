import React from 'react';

import { Advantages } from '../advantages/advantages.component';
import { CarPicker } from '../car-picker/car-picker.component';
import { TechnicalInfo } from '../technical-info/technical-info.component';

import { TabContentContainer } from './tabs.styles';

export const TabContent = () => {
    return (
        <TabContentContainer>
            <Advantages />
            <CarPicker />
            <TechnicalInfo />
        </TabContentContainer>
    );
};

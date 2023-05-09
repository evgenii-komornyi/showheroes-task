import React from 'react';

import { TabButton, TabsContainer } from './tabs.styles';
import useCarsStore from '../../../app/useCarsStore';

export const Tabs = () => {
    const { cars, selectedTab, onTabChange } = useCarsStore();

    return (
        <TabsContainer>
            {cars.map((car, index) => (
                <TabButton
                    key={index}
                    className={`${selectedTab === car.model ? 'active' : ''}`}
                    onClick={({ target }) => onTabChange(target.textContent)}
                >
                    {car.model}
                </TabButton>
            ))}
        </TabsContainer>
    );
};

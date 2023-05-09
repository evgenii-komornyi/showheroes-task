import React from 'react';
import { Section } from '../components/layout/section';
import { CarsInfo } from '../components/cars-info/cars-info.component';

export const CarsInfoSection = () => {
    return (
        <Section
            style={{
                marginTop: '50px',
                backgroundColor: '#ffffff',
                marginBottom: 0,
            }}
        >
            <CarsInfo />
        </Section>
    );
};

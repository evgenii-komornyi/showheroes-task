import React from 'react';
import { Section } from '../components/layout/section';
import { Description } from '../components/description/description.component';

export const DescriptionSection = () => {
    return (
        <Section
            style={{ marginTop: -19, height: 800, backgroundColor: '#ffffff' }}
        >
            <Description />
        </Section>
    );
};

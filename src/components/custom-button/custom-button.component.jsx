import React from 'react';
import { Button } from './custom-button.styles';

export const CustomButton = ({ text, className = '' }) => {
    return <Button className={className}>{text}</Button>;
};

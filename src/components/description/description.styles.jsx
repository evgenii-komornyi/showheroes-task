import styled, { keyframes } from 'styled-components';

import sectionBg from '../../assets/images/section_bg.jpg';

export const ImageBackgroundContainer = styled.div`
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-image: url(${sectionBg});
    background-size: cover;
    position: relative;

    @media (max-width: 480px) {
        height: 400px;
        align-items: flex-start;
        justify-content: center;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20rem 0 50px;

    @media (max-width: 480px) {
        padding: 50px;
    }
`;

export const ImageBackgroundTitle = styled.h1`
    color: #fffffd;
    font-size: 6rem;
    letter-spacing: 3px;

    & > span.shadowed {
        color: transparent;
        text-stroke: 1px #fffeff;
        -webkit-text-stroke: 1px #fffeff;
    }

    @media (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const DescriptionContainer = styled.div`
    position: absolute;
    right: 40px;
    bottom: -160px;
    width: 450px;
    height: 350px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 25px;

    @media (max-width: 480px) {
        width: 350px;
        height: 300px;
        bottom: -80px;
        left: 50px;
    }
`;

export const DescriptionTitle = styled.h3`
    font-size: 1.5rem;
    padding: 0 20px;
    text-transform: uppercase;
    color: #333333;
`;

export const DescriptionParagraph = styled.p`
    padding: 0 20px;
    font-size: 1.08rem;
    color: #333333;
`;

export const DescriptionButtonContainer = styled.div`
    padding: 0 20px;
    margin-top: 50px;
`;

const animatedBorders = keyframes`
    0% {
        border-image: linear-gradient(60deg, #ffffff, #93cbfe) 1;
    }
    50% {
        border-image: linear-gradient(60deg, #93cbfe, #ffffff) 1;
    }
    100% {
        border-image: linear-gradient(60deg, #ffffff, #93cbfe) 1;
    }
`;

export const DescriptionButton = styled.button`
    background-color: transparent;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    color: #333333;
    padding: 12px 17px;
    transition: background-color ease-in 0.5s;
    border: 2px solid transparent;
    border-image: linear-gradient(60deg, #ffffff, #93cbfe) 1;
    animation: ${animatedBorders} 2s ease alternate infinite;

    &:hover {
        animation-play-state: paused;
        cursor: pointer;
    }
`;

import styled from 'styled-components';

export const TabsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 50px 20px;
`;

export const TabButton = styled.button`
    width: 170px;
    height: 50px;
    padding: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: transparent;
    color: #000000;
    font-size: 1.1rem;
    font-family: 'Nouvel Bold', sans-serif;
    text-transform: uppercase;
    border: none;
    margin-left: 40px;

    &:first-child {
        margin-left: 0;
    }

    &:hover,
    &.active {
        font-family: 'Nouvel Regular', sans-serif;
        background-color: #000000;
        box-shadow: none;
        color: #ffffff;
        cursor: pointer;
    }
`;

export const TabContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 50px;
`;

import styled from 'styled-components';

export const FindButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    justify-self: center;
    width: 90%;
    margin: 70px 60px;
`;

export const Button = styled.button`
    border-radius: 0;
    border: none;
    background-color: #ffd600;
    color: #211c00;
    width: 250px;
    height: 50px;
    padding: 0 20px;
    font-weight: bold;
    letter-spacing: 1px;
    transition: all ease-out 0.5s;

    &.margin-left {
        margin-left: 20px;
        color: #4d472d;
    }

    &:hover {
        background-color: #000000;
        color: #ffffff;
        border: 1px solid #ffffff;
        transition: all ease-out 0.5s;
        cursor: pointer;
    }
`;

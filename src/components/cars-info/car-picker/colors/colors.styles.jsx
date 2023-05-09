import styled from 'styled-components';

export const ColorsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: -20px;
`;

export const ColorImageContainer = styled.div`
    width: 55px;
    height: 55px;
    padding: 10px 0px;
`;

export const ColorImage = styled.img`
    width: 100%;
    height: 100%;
    transition: margin-top linear 0.5s;

    &:hover {
        margin-top: -8px;
        transition: margin-top linear 0.5s;
    }

    &.selected {
        margin-top: -8px;
    }
`;

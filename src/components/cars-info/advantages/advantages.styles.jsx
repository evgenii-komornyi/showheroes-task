import styled from 'styled-components';

export const AdvantagesContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const AdvantagesList = styled.ul`
    list-style: none;
    padding: 0;
`;

export const AdvantagesItem = styled.li`
    font-size: 0.8rem;
    padding: 0 50px;

    @media (max-width: 480px) {
        padding: 0 10px;
    }

    &:before {
        content: '-';
        margin-right: 5px;
    }
`;

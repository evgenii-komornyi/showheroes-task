import styled from 'styled-components';

export const SectionContainer = styled.section`
    width: 100%;

    &.mobile {
        height: 800px;
        margin-top: -19px;
        background-color: #ffffff;

        @media (max-width: 480px) {
            height: 550px;
        }
    }

    @media (max-width: 480px) {
        padding: 0 !important;
    }
`;

import styled from 'styled-components';

const width = {
    xs: 480,
    sm: 768,
    md: 900,
    lg: 1080,
};

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-width: ${({ maxWidth }) => `${width[maxWidth]}px`};
    margin: 0 auto 100px auto;
    padding: 0;
`;

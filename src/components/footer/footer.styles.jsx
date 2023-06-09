import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-around;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 9999;
    max-width: 1080px;
    padding: 10px 0;
    height: 80px;
    color: white;
    background-color: black;
`;

export const LogoContainer = styled.div`
    width: 40%;
    display: flex;
    justify-content: flex-start;
    padding: 0 30px;
`;

export const Logo = styled.img`
    filter: invert(100%);
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 10px;

    @media (max-width: 480px) {
        width: 70%;
        padding: 0 25px;
    }
`;

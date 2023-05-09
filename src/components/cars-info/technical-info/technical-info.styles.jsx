import styled from 'styled-components';

export const TechnicalInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    align-self: center;
    padding: 30px 20px;
    margin-bottom: 100px;
    color: #7e7e7e;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TechnicalInfoItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 170px;
`;

export const InfoContainer = styled.p`
    margin: 0;
`;

export const PropertyContainer = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 10px 0 10px 0;
`;

export const TextContainer = styled.p`
    margin: 0;
    font-size: 0.9rem;
`;

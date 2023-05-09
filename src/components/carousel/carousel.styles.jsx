import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    color: #333333;
`;

export const MainTitle = styled.h1`
    font-size: 2rem;
    margin: 0;
`;

export const SubTitle = styled.p`
    padding: 10px 50px 40px 50px;
    font-size: 1.35rem;
    width: 50%;
    margin: 0 auto;
`;

export const WrapperContainer = styled.div`
    padding: 0 50px;
    position: relative;
`;

export const CarouselContainer = styled.div`
    margin: 10px auto;
    overflow: hidden;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    transition: transform 0.5s ease-in-out;
    transform: ${({ translateValue }) => `translateX(${translateValue}px)`};

    @media (max-width: 480px) {
        flex-wrap: nowrap;
    }
`;

export const Card = styled.div`
    flex: 0 0 calc(33.33% - 40px);
    margin: 0 21px;

    @media (max-width: 480px) {
        flex: 0 0 100%;
        margin: 0;
    }

    &:hover {
        cursor: pointer;
    }
`;

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const ItemHeader = styled.div`
    padding: 3px 0;
    background-color: #ff0;
    width: 100%;
    text-align: center;
`;

export const ImageContainer = styled.div`
    display: flex;
    margin: 0 auto;
`;

export const ItemImage = styled.img`
    width: 100%;
    height: auto;
    margin-right: auto;
    margin-left: auto;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #d9d9d6;
    color: #4e4f51;
    margin-top: 12px;
    width: 100%;
    margin-bottom: 12px;
`;

export const ItemCarName = styled.h3`
    font-size: 1rem;
    padding: 0 0 0 16px;
    line-height: 1;
    font-weight: 700;
    text-shadow: 1px 0 0;
`;

export const CarInfo = styled.div`
    display: flex;
    margin-top: -10px;
`;

export const Model = styled.h6`
    padding: 0 5px 0 16px;
    font-weight: bold;
    font-size: 0.7rem;
    text-transform: capitalize;
    margin: 0;
`;

export const TechnicalInfo = styled.p`
    font-size: 0.7rem;
    margin: 0 0 20px 1px;
`;

export const PriceInfoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

export const PriceContainer = styled.div`
    display: flex;
    position: relative;
    width: 90%;
    height: 40px;
    margin-bottom: 10px;
    background-color: #fff;
    align-items: center;
`;

export const Price = styled.h5`
    margin: 0;
    font-size: 1.5rem;
    padding: 0 5px 0 10px;
`;

export const Currency = styled.p`
    margin: 5px 0 0 0;
    font-size: 0.8rem;
    color: #959697;
`;

export const PriceButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    position: absolute;
    right: 0;
    text-align: center;
    height: 40px;
    background-color: #000000;
    color: #ffffff;

    &:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
`;

export const TotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px 0 16px;
`;

export const TotalWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Paragraph = styled.p`
    margin: 0;
    padding: 0 0 10px 0;
    font-size: 0.79rem;
`;

export const ButtonsContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 90%;
    top: 50%;

    @media (max-width: 480px) {
        width: 78%;
    }
`;

const ArrowButton = styled.button`
    position: absolute;
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    z-index: 1;
    outline: none;
`;

export const PrevButton = styled(ArrowButton)`
    left: -30px;
    background: ${({ arrowIcon }) => `url(${arrowIcon})`};
    transform: rotateY(180deg);
`;

export const NextButton = styled(ArrowButton)`
    right: -40px;
    background: ${({ arrowIcon }) => `url(${arrowIcon})`};
`;

import React from 'react';

import {
    CarInfo,
    Card,
    Currency,
    DescriptionContainer,
    ImageContainer,
    Item,
    ItemCarName,
    ItemHeader,
    ItemImage,
    Model,
    Paragraph,
    Price,
    PriceButtonContainer,
    PriceContainer,
    PriceInfoContainer,
    TechnicalInfo,
    TotalContainer,
    TotalWrapper,
} from './carousel.styles';

export const CarouselItem = ({ item }) => {
    return (
        <Card onClick={() => alert(`${item.model} was clicked`)}>
            <Item>
                <ItemHeader>
                    <p>Gælder kun lagerbiler</p>
                </ItemHeader>
                <ImageContainer>
                    <ItemImage src={item.image} alt={item.model} />
                </ImageContainer>
                <DescriptionContainer>
                    <ItemCarName>
                        Renault Ny Megane E-Tech 100% Electric
                    </ItemCarName>
                    <CarInfo>
                        <Model>{item.model}</Model>
                        <TechnicalInfo>
                            {item.technicalInfo.motor.capacity},{' '}
                        </TechnicalInfo>
                        <TechnicalInfo>
                            {item.technicalInfo.motor.text
                                .replace('eller', '')
                                .replace('hk', 'HK')}
                            ,
                        </TechnicalInfo>
                        <TechnicalInfo>
                            {`range 
                            ${item.technicalInfo.restoredRange.range}`}
                        </TechnicalInfo>
                    </CarInfo>
                    <PriceInfoContainer>
                        <PriceContainer>
                            <Price>{item.price}</Price>
                            <Currency>Kr./md.</Currency>
                            <PriceButtonContainer>Vælg</PriceButtonContainer>
                        </PriceContainer>
                    </PriceInfoContainer>
                    <TotalContainer>
                        <TotalWrapper>
                            <Paragraph>Udbetaling: </Paragraph>
                            <Paragraph>19.995 Kr.</Paragraph>
                        </TotalWrapper>
                        <TotalWrapper>
                            <Paragraph>
                                Samlet leasingydelse i perioden:{' '}
                            </Paragraph>
                            <Paragraph>160.815 Kr.</Paragraph>
                        </TotalWrapper>
                    </TotalContainer>
                </DescriptionContainer>
            </Item>
        </Card>
    );
};

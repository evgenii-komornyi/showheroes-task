import React, { memo } from 'react';

import ArrowIcon from '../../assets/icons/arrow.svg';

import { CarouselItem } from './carousel-item.component';

import { useCarousel } from '../../hooks/useCarousel.hook';

import {
    ButtonsContainer,
    CarouselContainer,
    CarouselWrapper,
    NextButton,
    PrevButton,
    WrapperContainer,
} from './carousel.styles';

export const Carousel = memo(() => {
    const [
        carouselItems,
        currentItem,
        carouselWrapperRef,
        handlePrevClick,
        handleNextClick,
    ] = useCarousel();

    return (
        <WrapperContainer>
            <CarouselContainer>
                <CarouselWrapper
                    ref={carouselWrapperRef}
                    translateValue={
                        -currentItem *
                        (carouselWrapperRef.current?.offsetWidth / 3)
                    }
                >
                    {carouselItems.map((item, index) => (
                        <CarouselItem key={index} item={item} />
                    ))}
                </CarouselWrapper>
            </CarouselContainer>
            <ButtonsContainer>
                <PrevButton arrowIcon={ArrowIcon} onClick={handlePrevClick} />

                <NextButton arrowIcon={ArrowIcon} onClick={handleNextClick} />
            </ButtonsContainer>
        </WrapperContainer>
    );
});

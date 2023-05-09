import { useCallback, useRef, useState } from 'react';

import { compile } from '../helpers/carouselItemsCompilator.helper';
import { cars } from '../data/cars';

export const useCarousel = () => {
    const [itemsPerSlide] = useState(window.innerWidth <= 480 ? 1 : 3);
    const carouselItems = compile(cars);

    const [currentItem, setCurrentItem] = useState(0);
    const carouselWrapperRef = useRef(null);

    const handlePrevClick = useCallback(() => {
        if (currentItem === 0) {
            setCurrentItem(carouselItems.length - itemsPerSlide);
        } else {
            setCurrentItem(currentItem - 1);
        }
    }, [currentItem, carouselItems.length, itemsPerSlide]);

    const handleNextClick = useCallback(() => {
        if (currentItem === carouselItems.length - itemsPerSlide) {
            setCurrentItem(0);
        } else {
            setCurrentItem(currentItem + 1);
        }
    }, [currentItem, carouselItems.length, itemsPerSlide]);

    return [
        carouselItems,
        currentItem,
        itemsPerSlide,
        carouselWrapperRef,
        handlePrevClick,
        handleNextClick,
    ];
};

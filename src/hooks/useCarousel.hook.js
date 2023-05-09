import { useCallback, useRef, useState } from 'react';

import { compile } from '../helpers/carouselItemsCompilator.helper';
import { cars } from '../data/cars';

export const useCarousel = () => {
    const carouselItems = compile(cars);

    const [currentItem, setCurrentItem] = useState(0);
    const carouselWrapperRef = useRef(null);

    const handlePrevClick = useCallback(() => {
        if (currentItem === 0) {
            setCurrentItem(carouselItems.length - 3);
        } else {
            setCurrentItem(currentItem - 1);
        }
    }, [currentItem, carouselItems.length]);

    const handleNextClick = useCallback(() => {
        if (currentItem === carouselItems.length - 3) {
            setCurrentItem(0);
        } else {
            setCurrentItem(currentItem + 1);
        }
    }, [currentItem, carouselItems.length]);

    return [
        carouselItems,
        currentItem,
        carouselWrapperRef,
        handlePrevClick,
        handleNextClick,
    ];
};

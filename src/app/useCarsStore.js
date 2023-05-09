import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { cars } from '../data/cars';

const carsStore = (set, get) => ({
    selectedTab: cars[0].model,
    cars: cars,
    selectedCar: cars[0],
    image: cars[0].default.image,
    selectedColor: cars[0].default.color,

    onTabChange: carModel => {
        const carByModel = cars.find(car => car.model === carModel);

        set({
            selectedTab: carByModel.model,
            selectedCar: carByModel,
            image: carByModel.default.image,
            selectedColor: carByModel.default.color,
        });
    },

    selectColor: (id, name) => {
        set({ image: get().selectedCar.images[id], selectedColor: name });
    },
});

const useCarsStore = create(devtools(carsStore));

export default useCarsStore;

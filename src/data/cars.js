import EtoileBlack from '../assets/images/colors/etoile_black.png';
import FlameRed from '../assets/images/colors/flame_red.png';
import GlacierWhite from '../assets/images/colors/glacier_white.png';
import NocturneBlue from '../assets/images/colors/nocturne_blue.png';
import RafaleGrey from '../assets/images/colors/rafale_grey.png';
import SchisteGrey from '../assets/images/colors/schiste_grey.png';

import TechnoEtoileBlack from '../assets/images/cars/megane_e-tech/techno/etoile_black.jpg';
import TechnoFlameRed from '../assets/images/cars/megane_e-tech/techno/flame_red.jpg';
import TechnoGlacierWhite from '../assets/images/cars/megane_e-tech/techno/glacier_white.jpg';
import TechnoNocturneBlue from '../assets/images/cars/megane_e-tech/techno/nocturne_blue.jpg';
import TechnoSchisteGrey from '../assets/images/cars/megane_e-tech/techno/schiste_grey.jpg';

import EquilibreEtoileBlack from '../assets/images/cars/megane_e-tech/equilibre/etoile_black.jpg';
import EquilibreFlameRed from '../assets/images/cars/megane_e-tech/equilibre/flame_red.jpg';
import EquilibreGlacierWhite from '../assets/images/cars/megane_e-tech/equilibre/glacier_white.jpg';
import EquilibreNocturneBlue from '../assets/images/cars/megane_e-tech/equilibre/nocturne_blue.jpg';
import EquilibreRafaleGrey from '../assets/images/cars/megane_e-tech//equilibre/rafale_grey.jpg';
import EquilibreSchisteGrey from '../assets/images/cars/megane_e-tech/equilibre/schiste_grey.jpg';

import IconicEtoileBlack from '../assets/images/cars/megane_e-tech/iconic/etoile_black.jpg';
import IconicFlameRed from '../assets/images/cars/megane_e-tech/iconic/flame_red.jpg';
import IconicGlacierWhite from '../assets/images/cars/megane_e-tech/iconic/glacier_white.jpg';
import IconicNocturneBlue from '../assets/images/cars/megane_e-tech/iconic/nocturne_blue.jpg';
import IconicRafaleGrey from '../assets/images/cars/megane_e-tech/iconic/rafale_grey.jpg';

export const cars = [
    {
        model: 'techno',
        default: {
            image: TechnoGlacierWhite,
            color: 'Glacier White',
        },
        images: {
            etoile_black: TechnoEtoileBlack,
            flame_red: TechnoFlameRed,
            glacier_white: TechnoGlacierWhite,
            nocturne_blue: TechnoNocturneBlue,
            schiste_grey: TechnoSchisteGrey,
        },
        colors: [
            { id: 'etoile_black', name: 'Etoile Black', color: EtoileBlack },
            { id: 'flame_red', name: 'Flame Red', color: FlameRed },
            { id: 'glacier_white', name: 'Glacier White', color: GlacierWhite },
            { id: 'nocturne_blue', name: 'Nocturne Blue', color: NocturneBlue },
            { id: 'schiste_grey', name: 'Schiste Grey', color: SchisteGrey },
        ],
        technicalInfo: {
            motor: { capacity: '200 kW/h', text: 'eller 220 hk' },
            acceleration: { time: '1,4 s', text: '0 - 300 km/t' },
            test: { distance: '850 km', text: 'raekkevidde (WLTP)' },
            restoredRange: {
                range: '500 km',
                text: 'genvundent raekkevidde pa 20 min',
            },
        },
        advantages: [
            'non enim praesent elementum facilisis leo vel fringilla est ullamcorper',
            'magna fermentum iaculis eu non diam phasellus vestibulum lorem sed',
            'elit sed vulputate mi sit amet mauris commodo quis imperdiet',
            'interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit',
            'justo donec enim diam vulputate ut pharetra sit amet aliquam',
        ],
        price: 4.195,
    },
    {
        model: 'equilibre',
        default: {
            image: EquilibreGlacierWhite,
            color: 'Glacier White',
        },
        images: {
            default: EquilibreGlacierWhite,
            etoile_black: EquilibreEtoileBlack,
            flame_red: EquilibreFlameRed,
            glacier_white: EquilibreGlacierWhite,
            nocturne_blue: EquilibreNocturneBlue,
            rafale_grey: EquilibreRafaleGrey,
            schiste_grey: EquilibreSchisteGrey,
        },
        colors: [
            { id: 'etoile_black', name: 'Etoile Black', color: EtoileBlack },
            { id: 'flame_red', name: 'Flame Red', color: FlameRed },
            { id: 'glacier_white', name: 'Glacier White', color: GlacierWhite },
            { id: 'nocturne_blue', name: 'Nocturne Blue', color: NocturneBlue },
            { id: 'rafale_grey', name: 'Rafale Grey', color: RafaleGrey },
            { id: 'schiste_grey', name: 'Schiste Grey', color: SchisteGrey },
        ],
        technicalInfo: {
            motor: { capacity: '160 kW/h', text: 'eller 320 hk' },
            acceleration: { time: '5,4 s', text: '0 - 200 km/t' },
            test: { distance: '720 km', text: 'raekkevidde (WLTP)' },
            restoredRange: {
                range: '400 km',
                text: 'genvundent raekkevidde pa 10 min',
            },
        },
        advantages: [
            'magna fermentum iaculis eu non diam phasellus vestibulum lorem sed',
            'interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit',
            'elit sed vulputate mi sit amet mauris commodo quis imperdiet',
            'justo donec enim diam vulputate ut pharetra sit amet aliquam',
            'non enim praesent elementum facilisis leo vel fringilla est ullamcorper',
        ],
        price: 3.895,
    },
    {
        model: 'iconic',
        default: {
            image: IconicGlacierWhite,
            color: 'Glacier White',
        },
        images: {
            default: IconicGlacierWhite,
            etoile_black: IconicEtoileBlack,
            flame_red: IconicFlameRed,
            glacier_white: IconicGlacierWhite,
            nocturne_blue: IconicNocturneBlue,
            rafale_grey: IconicRafaleGrey,
        },
        colors: [
            { id: 'etoile_black', name: 'Etoile Black', color: EtoileBlack },
            { id: 'flame_red', name: 'Flame Red', color: FlameRed },
            { id: 'glacier_white', name: 'Glacier White', color: GlacierWhite },
            { id: 'nocturne_blue', name: 'Nocturne Blue', color: NocturneBlue },
            { id: 'rafale_grey', name: 'Rafale Grey', color: RafaleGrey },
        ],
        technicalInfo: {
            motor: { capacity: '60 kW/h', text: 'eller 220 hk' },
            acceleration: { time: '7,4 s', text: '0 - 100 km/t' },
            test: { distance: '450 km', text: 'raekkevidde (WLTP)' },
            restoredRange: {
                range: '300 km',
                text: 'genvundent raekkevidde pa 30 min',
            },
        },
        advantages: [
            'interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit',
            'magna fermentum iaculis eu non diam phasellus vestibulum lorem sed',
            'non enim praesent elementum facilisis leo vel fringilla est ullamcorper',
            'justo donec enim diam vulputate ut pharetra sit amet aliquam',
            'elit sed vulputate mi sit amet mauris commodo quis imperdiet',
        ],
        price: 4.495,
    },
];

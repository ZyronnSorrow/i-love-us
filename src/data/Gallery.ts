import chels_0 from '../assets/images/chelsea/chels_0.jpeg';
import chels_1 from '../assets/images/chelsea/chels_1.jpeg';
import chels_2 from '../assets/images/chelsea/chels_2.jpeg';
import chels_3 from '../assets/images/chelsea/chels_3.jpeg';
import chels_4 from '../assets/images/chelsea/chels_4.jpeg';
import chels_5 from '../assets/images/chelsea/chels_5.jpeg';
import chels_6 from '../assets/images/chelsea/chels_6.jpeg';
import chels_7 from '../assets/images/chelsea/chels_7.jpeg';

export type GalleryItem = {
    id: string;
    src: string;
    alt: string;
    caption?: string;
    scale?: number;
};

export const chelseaGallery: GalleryItem[] = [
    {
        id: 'c-gal-0',
        src: chels_0,
        alt: 'Chelsea in the car with hair down',
    },
    {
        id: 'c-gal-1',
        src: chels_1,
        alt: 'Chelsea in silly glasses',
        caption: 'She\'s such a goober.',
    },
    {
        id: 'c-gal-2',
        src: chels_2,
        alt: 'Chelsea "I love you" sign',
        caption: 'I love you too, babe!',
    },
    {
        id: 'c-gal-3',
        src: chels_3,
        alt: 'Chelsea in a pretty dress',
        caption: 'So gorgeous!',
    },
    {
        id: 'c-gal-4',
        src: chels_4,
        alt: 'Chelsea- my favorite smile',
        caption: 'I love that smile.',
    },
    {
        id: 'c-gal-5',
        src: chels_5,
        alt: 'Chelsea in the car with hair up',
    },
    {
        id: 'c-gal-6',
        src: chels_6,
        alt: 'Chelsea in the car with hair down',
    },
    {
        id: 'c-gal-7',
        src: chels_7,
        alt: 'Chelsea with hair up',
    },
];

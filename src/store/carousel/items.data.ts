import { ICarouselItem } from '@/store/carousel/carousel.interface'

const getImageUrl = (path: string) => `http://localhost:3000/${path}`

export const items: ICarouselItem[] = [
    {
        id: 1,
        image: getImageUrl('carousel/expensify.png'),
    },
    {
        id: 2,
        image: getImageUrl('carousel/indecision.png'),
    },
    {
        id: 3,
        image: getImageUrl('carousel/monster-slayer.png'),
    },
]

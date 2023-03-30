import { FC } from 'react'
import Image from 'next/image'
import { ICarouselItem } from '@/store/carousel/carousel.interface'

const CarouselItem: FC<{ item: ICarouselItem }> = ({ item }) => {
    return (
        <div className="rounded-xl shadow-lg overflow-hidden mx-14">
            <Image src={item.image} alt="" width={700} height={394} />
        </div>
    )
}

export default CarouselItem

import { FC } from 'react'
import { useCarousel } from '@/components/screens/home/carousel/useCarousel'
import CarouselItem from '@/components/screens/home/carousel/CarouselItem'

const Carousel: FC = () => {
    const { items, currentId } = useCarousel()

    return (
        <div className="mt-14">
            {items.length ? (
                items.map((item) => <CarouselItem item={item} key={item.id} />)
            ) : (
                <div>Elements not found!</div>
            )}
        </div>
    )
}

export default Carousel

import { FC } from 'react'
import { useCarousel } from '@/components/screens/home/carousel/useCarousel'
import CarouselItem from '@/components/screens/home/carousel/CarouselItem'
import Navigation from '@/components/screens/home/carousel/Navigation'

const Carousel: FC = () => {
    const { items } = useCarousel()

    return (
        <section className="mt-14">
            <div className="flex items-center">
                {items.length ? (
                    items.map((item) => (
                        <CarouselItem item={item} key={item.id} />
                    ))
                ) : (
                    <div>Elements not found!</div>
                )}
            </div>
            <Navigation />
        </section>
    )
}

export default Carousel

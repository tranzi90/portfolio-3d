import { FC } from 'react'
import Image from 'next/image'
import { ICarouselItem } from '@/store/carousel/carousel.interface'
import { useCarousel } from '@/components/screens/home/carousel/useCarousel'
import cn from 'clsx'
import useActions from '@/hooks/useActions'

const CarouselItem: FC<{ item: ICarouselItem }> = ({ item }) => {
    const { currentId } = useCarousel()
    const { changeCurrentId } = useActions()

    const isActive = currentId === item.id

    return (
        <div className={cn('mx-14', isActive ? 'w-1/2' : 'w-1/4')}>
            <button onClick={() => changeCurrentId(item.id)}>
                <Image
                    src={item.image}
                    alt=""
                    width={700}
                    height={394}
                    className="rounded-xl shadow-lg overflow-hidden"
                />
            </button>

            {isActive && (
                <div className="w-1/2 mx-auto mt-10 bg-blue-400 h-2 rounded" />
            )}
        </div>
    )
}

export default CarouselItem

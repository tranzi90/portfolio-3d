import { FC } from 'react'
import { BsFillSignTurnLeftFill, BsFillSignTurnRightFill } from 'react-icons/bs'
import useActions from '@/hooks/useActions'

const Navigation: FC = () => {
    const { prevSlide, nextSlide } = useActions()

    return (
        <div className="mt-10 w-1/2 flex items-center justify-center mx-auto">
            <button
                onClick={() => prevSlide()}
                className="mr-14 transition-colors duration-500 hover:text-blue-500"
            >
                <BsFillSignTurnLeftFill size={40} />
            </button>
            <button
                onClick={() => nextSlide()}
                className="transition-colors duration-500 hover:text-blue-500"
            >
                <BsFillSignTurnRightFill size={40} />
            </button>
        </div>
    )
}

export default Navigation

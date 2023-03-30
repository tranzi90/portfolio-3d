import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {carouselSlice} from "@/store/carousel/carousel.slice";

const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(carouselSlice.actions, dispatch),
        [dispatch]
    )
}

export default useActions
import {configureStore} from "@reduxjs/toolkit"
import {carouselSlice} from "@/store/carousel/carousel.slice"

export const store = configureStore({
    reducer: {
        carousel: carouselSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
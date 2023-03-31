import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICarousel } from '@/store/carousel/carousel.interface'
import { items } from '@/store/carousel/items.data'

const initialState: ICarousel = {
    currentId: 1,
    items,
}

export const carouselSlice = createSlice({
    name: 'carousel',
    initialState,
    reducers: {
        nextSlide: (state) => {
            const nextId = state.currentId + 1
            const nextItem = state.items.find((item) => item.id === nextId)
            if (!nextItem) return

            state.currentId = nextId
        },
        prevSlide: (state) => {
            const prevId = state.currentId - 1
            if (!prevId) return

            const prevItem = state.items.find((item) => item.id === prevId)
            if (!prevItem) return

            state.currentId = prevId
        },
        changeCurrentId: (state, action: PayloadAction<number>) => {
            state.currentId = action.payload
        },
    },
})

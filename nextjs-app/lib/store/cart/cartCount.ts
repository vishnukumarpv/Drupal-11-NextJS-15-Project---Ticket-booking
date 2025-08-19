
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  value: number
  loading: boolean
}

const initialState: CounterState = {
  value: 0,
  loading: false,
}

const cartCount = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
    reset: (state) => {
      state.value = 0
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, reset, setLoading } = cartCount.actions
export default cartCount.reducer
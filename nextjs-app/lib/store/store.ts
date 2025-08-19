
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import counterSlice from './features/counter/counterSlice'
// import todoSlice from './features/todos/todoSlice'
import cartCount from './cart/cartCount'


export const makeStore = () => {
  return configureStore({
    reducer: {
      cartcount: cartCount,
      // todos: todoSlice,
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

// Typed hooks for TypeScript
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
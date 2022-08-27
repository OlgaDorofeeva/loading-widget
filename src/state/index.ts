import { configureStore } from '@reduxjs/toolkit'
import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import widgetReducer from './widget'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    widget: widgetReducer,
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useDispatch = () => useReduxDispatch<AppDispatch>()
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export default store

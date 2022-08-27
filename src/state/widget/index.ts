import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { WidgetResponse, WidgetState } from '../types'

const initialState: WidgetState = {
  isLoading: false,
  isError: false,
  data: null,
}

export const fetchDataWidget = createAsyncThunk<WidgetResponse>('dataWidget/fetch', async () => {
  const response = await fetch('')
  // const data = (await response.json()) as WidgetResponse

  return { someKey: 'someValue' }
})

export const widgetSlice = createSlice({
  name: 'Widget',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchDataWidget.pending, state => {
      state.isLoading = true
    })
    builder.addCase(fetchDataWidget.fulfilled, (state, action: PayloadAction<WidgetResponse>) => {
      state.isLoading = false
      state.data = action.payload
    })
    builder.addCase(fetchDataWidget.rejected, state => {
      state.isLoading = false
      state.isError = true
    })
  },
})

export default widgetSlice.reducer

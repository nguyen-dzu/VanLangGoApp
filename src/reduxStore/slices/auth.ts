import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { storage } from '../../helpers'

type IState = {
  isLoading: boolean
  token: null | string
  isLoadResource: boolean
  isError: boolean
}

const initialState: IState = {
  isLoading: true,
  isError: false,
  token: null,
  isLoadResource: false,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  
  reducers: {
    restoreToken: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.token = action.payload
    },
    login: (state, action) => {
      state.token = action.payload
      state.isLoadResource = true
      storage.set('token', action.payload)
    },
    logout: state => {
      state.isLoading = false
      state.token = null
      state.isLoadResource = false
      storage.clear()
    },
  },

})

export const authActions = slice.actions
export const authReducers = slice.reducer

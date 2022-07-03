import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { IUser } from 'api/apiInterfaces'
// import { storage } from 'helpers'

// const getUser = createAsyncThunk('auth/user', async () => {
//   try {
//     const data = await userApi.get()
//     return data.customer
//   } catch (error) {
//     throw error
//   }
// })

type IState = {
  isLoading: boolean
  token: null | string
  isLoadResource: boolean
  isError: boolean
  // user: IUser | null
}

const initialState: IState = {
  isLoading: true,
  isError: false,
  token: null,
  isLoadResource: false,
  // user: null,
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    restoreToken: (state, action: PayloadAction<string>) => {
      state.isLoading = false
      state.token = action.payload
    },
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      state.isLoadResource = true
      // storage.set('token', action.payload)
    },
    logout: state => {
      state.isLoading = false
      state.token = null
      state.isLoadResource = false
      // state.user = null
      // storage.remove('token')
    },
    // setUser: (state, action: PayloadAction<IUser>) => {
    //   state.user = action.payload
    // },
  },
  // extraReducers: builder => {
  //   builder.addCase(getUser.fulfilled, (state, action: any) => {
  //     state.isError = false
  //     state.user = action.payload
  //   })
  //   builder.addCase(getUser.rejected, (state, action) => {
  //     state.isError = true
  //   })
  // },
})

export const authActions = { ...slice.actions,/*getUser*/ }
export const authReducers = slice.reducer

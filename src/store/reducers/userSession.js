import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'userSession',
  initialState: {
    id: null,
    lastPosition: null,
    email: null
  },
  reducers: {
    setId: (state, data) => {
      state.id = data.payload
    },
    setLastPosition: (state, data) => {
      state.lastPosition = data.payload
    },
    setEmail: (state, data) => {
      state.email = data.payload
    },
    signIn: (state, data) => {
      state.id = data.payload[0]
      state.email = data.payload[1]
    },
    sessionClean: state => {
      state.id = null
      state.lastPosition = null
      state.email = null
    }
  }
})

export const { setId, setLastPosition, sessionClean, signIn } = counterSlice.actions

export const userSession = configureStore({
  reducer: counterSlice.reducer
})

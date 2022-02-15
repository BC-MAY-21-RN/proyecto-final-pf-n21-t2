import {createSlice, configureStore} from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'userSession',
  initialState: {
    id: null,
    lastPosition: null,
  },
  reducers: {
    setId: (state, data) => {
      state.id = data.payload;
    },
    setLastPosition: (state, data) => {
      state.lastPosition = data.payload;
    },
    sessionClean: state => {
      state.id = null;
      state.lastPosition = null;
    },
  },
});

export const {setId, setLastPosition, sessionClean} = counterSlice.actions;

export const userSession = configureStore({
  reducer: counterSlice.reducer,
});
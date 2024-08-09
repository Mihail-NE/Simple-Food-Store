import { createSlice } from '@reduxjs/toolkit'

export interface userState {
  JWT: string | null;
}

const initialState: userState = {
  JWT: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    addJWT: (state, action) => {
      state.JWT = action.payload;
    },
    logout: (state) => {
      state.JWT = null;
    }
  },

})


export default userSlice.reducer
export const { addJWT, logout } = userSlice.actions
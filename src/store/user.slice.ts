import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface userState {
  JWT: string | null;
}

const initialState: userState = {
  JWT: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addJWT: (state, action: PayloadAction<string>) => {
      state.JWT = action.payload;
    },
    logout: (state) => {
      state.JWT = null;
    }
  },

})


export default userSlice.reducer
export const UserActions = userSlice.actions
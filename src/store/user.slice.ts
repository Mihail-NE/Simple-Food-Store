import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loadState } from './storage';

export const JWT_PERSISTEN_STATE = 'userData';

export interface UserPersistenState {
  JWT: string | null;
}

export interface userState {
  JWT: string | null;
}

const initialState: userState = {
  JWT: loadState<UserPersistenState>(JWT_PERSISTEN_STATE)?.JWT ?? null,
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
import { configureStore } from "@reduxjs/toolkit";
import userSlice, { JWT_PERSISTEN_STATE } from "./user.slice";
import { saveState } from "./storage";

export const store = configureStore({
    reducer: {
        user: userSlice,
    },
});

store.subscribe(() => {
    saveState({ JWT: store.getState().user.JWT }, JWT_PERSISTEN_STATE);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { memoSlice } from "@/redux/reducers/memo";

export const makeStore = () => {
  return configureStore({
    reducer: {
      memos: memoSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

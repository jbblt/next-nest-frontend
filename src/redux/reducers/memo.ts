import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";

interface Memo {
  createdAt: string;
  title: string;
  content: string;
}
export interface MemoState {
  memos: Memo[];
}

export const initialMemoState: MemoState = {
  memos: [
    {
      createdAt: "2021-09-01-10:00",
      title: "First memo",
      content: "This is the first memo",
    },
    {
      createdAt: "2021-09-01-10:01",
      title: "Second memo",
      content: "This is the second memo",
    },
    {
      createdAt: "2021-09-01-10:03",
      title: "Third memo",
      content: "This is the third memo",
    },
  ],
};

export const memoSlice = createSlice({
  name: "memo",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialMemoState,
  reducers: {
    addMemo: (state, action: PayloadAction<Memo>) => {
      state.memos = [...state.memos, action.payload];
    },
  },
});

export const { addMemo } = memoSlice.actions;

export const selectMemos = (state: RootState) => state.memos;

export default memoSlice.reducer;

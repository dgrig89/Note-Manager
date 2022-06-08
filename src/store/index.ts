import { configureStore } from "@reduxjs/toolkit";
import folderSlice from "./folder-slice";

const store = configureStore({
  reducer: { folderItem: folderSlice.reducer },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

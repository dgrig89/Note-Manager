import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFolder } from "../types/FolderItemsType";

const initialState = {
  id: 1,
  parentId: 1,
  name: "",
};

const folderSlice = createSlice({
  name: "folderItem",
  initialState,
  reducers: {
    getFolderData(state: IFolder, action: PayloadAction<IFolder>): void {
      state = action.payload;
    },

    addFolderAsync() {},
    addFolder(state: IFolder, action: PayloadAction<IFolder>) {
      state.id = action.payload.id;
    },
  },
});

export const folderActions = folderSlice.actions;

export default folderSlice;

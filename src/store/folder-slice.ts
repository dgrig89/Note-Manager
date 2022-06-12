import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFolder } from "../types/FolderItemsType";

const initialState: IFolder = {
  folder: [
    {
      id: 1,
      parentId: 1,
      name: "",
    },
  ],
};

const folderSlice = createSlice({
  name: "folderItem",
  initialState,
  reducers: {
    getFolderData(state: IFolder, action: PayloadAction<IFolder>) {
      state.folder = action.payload;
    },

    addFolderAsync() {},
    addFolder(state: IFolder, action: PayloadAction<IFolder>) {
      const existFolderIndex = state.folder.findIndex(
        (i) => i.id !== action.payload.id
      );
      const existFolder = state.folder[existFolderIndex];
      console.log(existFolderIndex);
      state.folder.push({
        id: state.folder.id,
        parentId: existFolder.id,
        name: action.payload.name,
      });
    },
  },
});

export const folderActions = folderSlice.actions;

export default folderSlice;

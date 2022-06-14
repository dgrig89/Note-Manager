import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFolder } from "../types/FolderItemsType";

const initialState = {
  id: 1,
  parentId: 1,
  name: "",
};

const initialState2 = {
  folders: [],
  notes: [],
  parentFolderId: 1,
  selectedFolder: null,
  seletedNote: null,
};

const folderSlice = createSlice({
  name: "folderItem",
  initialState,
  reducers: {
    setFolders(state: IFolder[], action: PayloadAction<IFolder>): void {
      state = action.payload;
    },
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

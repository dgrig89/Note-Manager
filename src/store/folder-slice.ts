import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoldersType } from "../types/FolderItemsType";

const initialState: FoldersType = {
  parentId: 1,
  name: "",
};

const folderSlice = createSlice({
  name: "folderItem",
  initialState,
  reducers: {
    getFetchFolder(state: FoldersType, action: PayloadAction<FoldersType>) {
      state = action.payload;
    },
    addFolderAsync(state: FoldersType, action: PayloadAction<FoldersType>){},
    addFolder(state: FoldersType, action: PayloadAction<FoldersType>) {
      const newFolder = action.payload;
      return { ...state, ...newFolder };
    },
  },
});

export const { getFetchFolder, addFolder } = folderSlice.actions;

export default folderSlice;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FoldersType } from "../types/FolderItemsType";

const initialState: FoldersType = {
  id: 0,
  name: "",
  parentId: null,
  children: [],
  hasChild: false,
};

const folderSlice = createSlice({
  name: "folderItem",
  initialState,
  reducers: {
    addFolder(state: FoldersType, action: PayloadAction<FoldersType>) {
      state.parentId = action.payload.id;
      state.id = action.payload.id + 1;
      state.name = action.payload.name;
      if (!state.hasChild) {
        state.children.push({
          parentId: action.payload.id,
          id: action.payload.id + 1,
          name: action.payload.name,
          children: [],
          hasChild: false,
        });
      }
    },
  },
});

export const folderActions = folderSlice.actions;

export default folderSlice;

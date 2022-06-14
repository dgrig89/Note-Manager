import { IFolder } from "./../types/FolderItemsType";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put } from "redux-saga/effects";
import { folderActions } from "../store/folder-slice";
import axios from "axios";
import { API_URL } from "../utils/constants";

export function* createFolder(action: PayloadAction<IFolder>): Generator {
  try {
    const addFolderFromApi = async () =>
      await axios.post(`${API_URL}/directories`, {
        data: {
          name: action.payload.name,
          parentId: action.payload.parentId,
        },
      });
    const response: any = yield call(addFolderFromApi);
    yield put(folderActions.addFolder(response.data));
  } catch (err) {
    throw err;
  }
}

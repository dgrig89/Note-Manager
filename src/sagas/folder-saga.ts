import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { folderActions } from "../store/folder-slice";

import axios from "axios";
import { IFolder } from "../types/FolderItemsType";

export function* handlerAddFolder(action: IFolder): Generator {
  try {
    const addFolderRequest = async () => {
      await axios
        .post("http://localhost:3000/directories", {
          data: {
            action,
          },
        })
        .then((res) => res.data)
        .catch((err) => {
          throw err;
        });
    };
    const response: any = yield call(addFolderRequest);
    const { data } = response;
    yield put(folderActions.addFolder(data));
  } catch (err) {
    throw err;
  }
}

export function* addFolderSaga(): Generator<StrictEffect> {
  yield takeEvery(folderActions.addFolderAsync, handlerAddFolder);
}

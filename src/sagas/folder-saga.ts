import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { fetchFolderData, sendFolderData } from "../store/folder-actions";
import { addFolder, getFetchFolder } from "../store/folder-slice";
import { FoldersType } from "../types/FolderItemsType";

function* fetchFolderWorker() {
  const data: FoldersType = yield call(fetchFolderData);
  yield put(getFetchFolder(data));
}

function* addFolderWorker() {
  const data: FoldersType = yield call(sendFolderData);

  yield put(addFolder(data));
}

function* folderSaga(): Generator<StrictEffect> {
  yield takeEvery("folderItem/getFetchFolder", fetchFolderWorker);
  yield takeEvery("folderItem/addFolder", addFolderWorker);
}
export default folderSaga;

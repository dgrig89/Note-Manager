import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { fetchFolderData } from "../store/folder-actions";
import { addFolder, getFetchFolder } from "../store/folder-slice";
import { FoldersType } from "../types/FolderItemsType";

function* fetchFolderWorker() {
  const data: FoldersType = yield call(() =>
    fetch("http://localhost:3000/directories")
  );
  const folder = yield data.json();
  yield put(getFetchFolder(folder));
}

// function* addFolderWorker() {
//   const data: FoldersType = yield call(fetchFolderData);

//   yield put(addFolder);
// }

function* folderSaga(): Generator<StrictEffect> {
  yield takeEvery("folderItem/getFetchFolder", fetchFolderWorker);
  yield takeEvery("folderItem/addFolder", addFolderWorker);
}
export default folderSaga;

import { call, put, StrictEffect, takeEvery } from "redux-saga/effects";
import { fetchFolderData } from "../store/folder-actions";
import folderActions from "../store/folder-slice";
import { FoldersType } from "../types/FolderItemsType";

function* fetchFolderWorker() {
  try {
    const data: FoldersType = yield call(() =>
      fetch("http://localhost:3000/directories")
    );
    const folder = yield data.json();
    
    yield put(getFetchFolder(folder));
  } catch () {
    //ALert with message
  }
}

// function* addFolderWorker() {
//   const data: FoldersType = yield call(fetchFolderData);

//   yield put(addFolder);
// }

function* folderSaga(): Generator<StrictEffect> {
  yield takeEvery("folderItem/getFetchFolder", fetchFolderWorker);
  yield takeEvery("folderItem/addFolder", addFolderWorker);
}

/*
function* folderSaga(): Generator<StrictEffect> {
  yield takeEvery(folderAction.addFolderAsync, fetchFolderWorker);
}
*/
export default folderSaga;

import { all, fork } from "redux-saga/effects";
import { addFolderSaga } from "./folder-saga";
function* folderSaga() {
  yield all([fork(addFolderSaga)]);
}
export default folderSaga;

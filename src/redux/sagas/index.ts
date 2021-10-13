import { all, fork } from "redux-saga/effects";
import  NotepadSaga  from "../../modules/NotepadModule/redux/sagas/NotepadSaga"
import gistsSaga from "../../modules/DashboardModule/redux/saga/GistsSaga";

function* rootSaga() {
  yield all([fork(NotepadSaga), fork(gistsSaga)]);
}

export default rootSaga;

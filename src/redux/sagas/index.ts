import { all, fork } from "redux-saga/effects";
import  NotepadSaga  from "../../modules/NotepadModule/redux/sagas/NotepadSaga"

function* rootSaga() {
  yield all([fork(NotepadSaga)]);
}

export default rootSaga;

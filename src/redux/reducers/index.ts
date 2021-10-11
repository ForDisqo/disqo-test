/**
 *  FILE: REDUX ROOT REDUCER
 **/

import { combineReducers } from "redux";
import NotepadsReducer from "../../modules/NotepadModule/redux/reducer/NotepadsReducer";

const rootReducer = combineReducers({
  notepads: NotepadsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

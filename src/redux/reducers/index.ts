/**
 *  FILE: REDUX ROOT REDUCER
 **/

import { combineReducers } from "redux";
import NotepadsReducer from "../../modules/NotepadModule/redux/reducer/NotepadsReducer";

// All Reducers - '../../containers/*/reducers'


const rootReducer = combineReducers({
  notepads: NotepadsReducer,
  // publicGists: gistsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

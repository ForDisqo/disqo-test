import { PayloadAction } from "@reduxjs/toolkit";
import { deepClone, generateId } from "../../../../util/UtilFunctions";
import { INote, INotepad } from "./../../Interfaces";
import {
  ConstantsNotepad
} from "../actions/Enum";

export interface IProfileReducerState {
  data: INotepad[];
  idMap: { [key: string]: INote };
}

const initialState: IProfileReducerState = {
  data: [],
  idMap: {},
};

const notepadReducer = (
  state = initialState,
  action: PayloadAction<{ data?: any; notepadId?: string; noteId: string }>
) => {
  const { type, payload: { data, notepadId = "", noteId } = { data: [] } } =
    action;
  const idMapClone = deepClone(state.idMap);
  switch (type) {
    case ConstantsNotepad.GET_NOTEPADS_SUCCESS:
      return {
        ...state,
        data,
      };
    case ConstantsNotepad.GET_NOTEPAD_BY_ID_SUCCESS:
      idMapClone[data.id] = {
        id: data.id,
        title: data.description,
        notes: Object.keys(data.files).map((key) => ({
          title: key,
          description: data.files[key].content,
          id: generateId(),
        })),
      };

      return {
        ...state,
        idMap: idMapClone,
      };
    case ConstantsNotepad.ADD_NOTEPAD_SUCCESS:
      const stateClone: IProfileReducerState = deepClone(state);
      stateClone.data.push(data);
      stateClone.idMap[data.id] = data;
      return stateClone;

    case ConstantsNotepad.REMOVE_NOTEPAD_BY_ID_SUCCESS:
      return {
        ...state,
        data: state.data.filter(
          (notepad) => notepad.id !== action.payload.data
        ),
      };

    case ConstantsNotepad.REMOVE_NOTE_BY_ID_SUCCESS:
      idMapClone[notepadId].notes = idMapClone[notepadId].notes.filter(
        (note: INote) => note.id !== noteId
      );

      return {
        ...state,
        idMap: idMapClone,
      };

    default:
      return state;
  }
};

export default notepadReducer;

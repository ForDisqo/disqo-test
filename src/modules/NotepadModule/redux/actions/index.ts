import {ConstantsNotepad} from "./Enum"
import {INote, INotepad} from "../../Interfaces";

// Add functionality
export const addNotepad = (notepad: INotepad, cb: () => void) => ({
    type: ConstantsNotepad.ADD_NOTEPAD,
    payload: { notepad, cb },
});

export const addNotepadSuccess = (data: INotepad) => ({
    type: ConstantsNotepad.ADD_NOTEPAD_SUCCESS,
    payload: { data },
});

//Edit functionality
export const editNotepad = (data: any, id: string) => ({
    type: ConstantsNotepad.EDIT_NOTEPAD,
    payload: { data, id },
});

export const editNotepadSuccess = (data: INotepad) => ({
    type: ConstantsNotepad.EDIT_NOTEPAD_SUCCESS,
    payload: { data },
});

//Remove functionality
export const removeNotepadById = (id: string) => ({
     type: ConstantsNotepad.REMOVE_NOTEPAD_BY_ID,
    payload: { id },
});

export const removeNotepadByIdSucess = (data: string) => ({
     type: ConstantsNotepad.REMOVE_NOTEPAD_BY_ID_SUCCESS,
    payload: { data },
});

export const removeNoteById = (data: INote, id: string) => ({
    type: ConstantsNotepad.REMOVE_NOTE_BY_ID,
    payload: { data, id },
});

export const removeNoteByIdSuccess = (notepadId: string, noteId: string) => ({
    type: ConstantsNotepad.REMOVE_NOTE_BY_ID_SUCCESS,
    payload: { notepadId, noteId },
});


//Get functionality
export const getNotepads = () => ({  type: ConstantsNotepad.GET_NOTEPADS });

export const getNotepadsSuccess = (data: any) => ({
    type: ConstantsNotepad.GET_NOTEPADS_SUCCESS,
    payload: { data },
});

export const getNotepadById = (id: string) => ({
     type: ConstantsNotepad.GET_NOTEPAD_BY_ID,
    payload: { id },
});

export const getNotepadByIdSuccess = (data: any) => ({
     type: ConstantsNotepad.GET_NOTEPAD_BY_ID_SUCCESS,
    payload: { data },
});

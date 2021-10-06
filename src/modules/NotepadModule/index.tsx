import React from "react";
import {INote, INotepad} from "./Interfaces";
import {deepClone, generateId} from "../../util/UtilFunctions";
import {useHistory, useParams} from "react-router";
import {addNotepad, editNotepad, getNotepadById, removeNoteById} from "./redux/actions";
import Input from "../../components/input";
import Button, {ButtonTypeEnum} from "../../components/button";
import {Paths} from "../../config/enum/Paths";
import {RootState} from "../../redux/reducers";
import {useDispatch, useSelector} from "react-redux";
import Textarea from "../../components/textarea";

interface IProps {
    createMode?: boolean;
}

const NotepadModule: React.FC<IProps> = ({ createMode }) => {
    const [notes, setNotes] = React.useState<INote[]>([]);
    const [title, setTitle] = React.useState("");
    const [newNoteTitle, setNewNoteTitle] = React.useState("");
    const [newNoteDesc, setNewNoteDesc] = React.useState("");

    const { id }: { id: string } = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    const notepad: INotepad = useSelector(
        (state: RootState) => state.notepads.idMap[id]
    );

    React.useEffect(() => {
        if (!createMode) {
            dispatch(getNotepadById(id));
        }
    }, [createMode, dispatch, id]);

    React.useEffect(() => {
        if (!notepad) return;
        setTitle(notepad?.title);
        setNotes(notepad?.notes);
    }, [notepad]);

    React.useEffect(() => {
        if (!notepad) return;
        setTitle(notepad?.title);
        setNotes(notepad?.notes);
    }, [notepad]);


    const handleAddNote = () => {
        setNotes([
            ...notes,
            { title: newNoteTitle, description: newNoteDesc, id: generateId() },
        ]);
    };

    const handlerInputs = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement> ) =>{
        if(e.currentTarget.name == 'newNoteTitle'){
            setNewNoteTitle(e.currentTarget.value)
        }else{
            setNewNoteDesc(e.currentTarget.value)
        }
    }

    const handleSaveNotepad = () => {
        dispatch(
            addNotepad(
                { title, notes, id: generateId(), createdAt: new Date() },
                () => history.push(Paths.HOME_PAGE)
            )
        );
    };

    const handleNoteChange = React.useCallback(
        (key: string, value: string, id: string) => {
            const notesClone = deepClone(notes);
            const foundIndex = notesClone.findIndex((note: INote) => note.id === id);
            if (value !== notesClone[foundIndex][key]) {
                notesClone[foundIndex][key] = value;
                setNotes(notesClone);
                if (!createMode) {
                    dispatch(editNotepad(notesClone[foundIndex], notepad.id));
                }
            }
        },
        [notes, dispatch, notepad, createMode]
    );

    const handleNotepadNameChanged = () => {
        if (createMode) return;
        dispatch(editNotepad({ notepadName: title }, notepad.id));
    };

    const handleNoteRemove = React.useCallback(
        (note) => {
            dispatch(removeNoteById(note, notepad.id));
        },
        [notepad]
    );

    // @ts-ignore
    return (
        <div>
            <section className="title_of_notepad">
                <div className="row mx-auto justify-content-between">
                    <div className="col-6">
                            <Input
                                name="title"
                                placeholder="Input Notepad title"
                                onChange={(e) => setTitle(e.currentTarget.value)}
                                onBlur={handleNotepadNameChanged}
                                defaultValue={title}
                            />

                    </div>
                    <div className="col-6">
                        <div className="row mx-auto justify-content-end">
                            <div className="col-3">
                                <Button
                                    text="View State"
                                    onClick={()=>{}}
                                    buttonType={ButtonTypeEnum.view}
                                />
                            </div>
                            <div className="col-3">
                                {!createMode && (
                                    <Button
                                        text="Save"
                                        onClick={()=>{}}
                                        buttonType={ButtonTypeEnum.save}
                                    />
                                )}
                                {createMode && (
                                    <Button
                                        text="Create"
                                        onClick={handleSaveNotepad}
                                        disabled={!title || !notes.length}
                                        buttonType={ButtonTypeEnum.create}
                                    />
                                )}
                            </div>
                            <div className="col-3">
                                <Button
                                    text="Delete"
                                    onClick={()=>{}}
                                    buttonType={ButtonTypeEnum.delete}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="add_new_note">
                <div className="row " >
                    <div className="col">
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Input
                                    id="new_note_title"
                                    name="newNoteTitle"
                                    placeholder="New note title"
                                    defaultValue={newNoteTitle}
                                    onChange={handlerInputs}
                                />

                            </div>
                        </div>
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Textarea
                                    id="new_note_desc"
                                    name="newNoteDesc"
                                    placeholder="New Note Text"
                                    onChange={handlerInputs}
                                >
                                    {newNoteDesc}
                                </Textarea>
                            </div>
                        </div>
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Button
                                    text="Add"
                                    onClick={handleAddNote}
                                    buttonType={ButtonTypeEnum.add}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="note-view">
                {notes?.map((note) => (
                <section className="list_of_notes">
                    <div className="row " >
                        <div className="col">
                            <div className="row mx-auto justify-content-between">
                                <div className="col-6">
                                    <Input
                                        name="title"
                                        placeholder="New note title"
                                        defaultValue={note.title}
                                        onChange={()=>{}}
                                    />
                                </div>
                                <div className="col-6">
                                    <Button
                                        text="Delete"
                                        onClick={handleNoteRemove}
                                        buttonType={ButtonTypeEnum.delete}
                                    />
                                </div>
                            </div>
                            <div className="row mx-auto justify-content-between">
                                <div className="col-6">
                                    <Textarea name="title_new_note" placeholder="New Note Text">
                                        {note.description}
                                    </Textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                ))}

                {/*<ul>*/}
                {/*    {notes?.map((note) => (*/}
                {/*        <Note*/}
                {/*            key={note.id}*/}
                {/*            data={note}*/}
                {/*            onNoteChange={handleNoteChange}*/}
                {/*            onNoteRemove={handleNoteRemove}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </div>
    );
};

export default NotepadModule;
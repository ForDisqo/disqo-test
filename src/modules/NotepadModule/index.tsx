import React, {useState} from "react";
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
import Note from "./components/Note";

interface IProps {
    NotepadMode?: string
}

const NotepadModule: React.FC<IProps> = ({NotepadMode}) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [notes, setNotes] = useState<INote[]>([]);
    const [title, setTitle] = useState("");
    const [newNoteTitle, setNewNoteTitle] = useState("");
    const [newNoteDesc, setNewNoteDesc] = useState("");
    const { id }: { id: string } = useParams();
    const notepad: INotepad = useSelector((state: RootState) => state.notepads.idMap[id]);
    const [mode, setMode] = useState<string>("")

    React.useEffect(() => {
        if(NotepadMode) {setMode(NotepadMode)}else
        if(!id){setMode("create");
        }else{
            dispatch(getNotepadById(id));
            setMode("update")
        }
        (!id) ? setMode("create"): dispatch(getNotepadById(id));

        console.log(notes);
    },[mode, dispatch, id])

    React.useEffect(() => {
        if (!notepad) return;
        setTitle(notepad?.title);
        setNotes(notepad?.notes);
    }, [notepad]);

    const handleInputs = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement> ) =>{
        if(e.currentTarget.name === 'newNoteTitle'){setNewNoteTitle(e.currentTarget.value)
        }else{setNewNoteDesc(e.currentTarget.value)}
    }

    const handleSaveNotepad = () => {
        if(mode === 'update'){
            dispatch(editNotepad({ notepadName: title, files: notes, id: id, created_at: new Date() }, id));
            history.push(Paths.HOME_PAGE)
        }else{
            dispatch(addNotepad({ title, notes, id: generateId(), createdAt: new Date() },
                () => history.push(Paths.HOME_PAGE)));
        }
    };

    const handleNoteChange = React.useCallback((key: string, value: string, id: string) => {
            const notesClone = deepClone(notes);
            const foundIndex = notesClone.findIndex((note: INote) => note.id === id);
            if (value !== notesClone[foundIndex][key]) {
                notesClone[foundIndex][key] = value;
                setNotes(notesClone);
                if (mode === 'update') {dispatch(editNotepad(notesClone[foundIndex], notepad.id));}
            }
        }, [notes, dispatch, notepad, (mode === 'create')]);

    const handleNotepadNameChanged = () => {
        if (mode !== 'update') return;
        dispatch(editNotepad({ notepadName: title }, notepad.id));
    };

    const handleAddNote = () => {
        let title = newNoteTitle;
        let description = newNoteDesc;
        setNotes((prevNotes) =>{
            return [...prevNotes, { title: title, description: description, id: generateId() },];
        })
    };

    const handleNoteRemove = (note:INote) => {
        if(mode === "update"){
            dispatch(removeNoteById(note, notepad.id));
        }else{
            setNotes(notes.filter(item => item.id !== note.id));
        }
    };

    return (<div>
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
                                onClick={() => {}}
                                buttonType={ButtonTypeEnum.view}/>
                        </div>
                        <div className="col-3">
                                <Button
                                    text={(mode === 'update') ? "Save" : "Create"}
                                    onClick={handleSaveNotepad}
                                    buttonType={ButtonTypeEnum.save}/>
                        </div>
                        <div className="col-3">
                            <Button
                                text="Delete"
                                onClick={() => {}}
                                buttonType={ButtonTypeEnum.delete}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="add_new_note">
            <div className="row ">
                <div className="col">
                    <div className="row mx-auto justify-content-between">
                        <div className="col-6">
                            <Input
                                id="new_note_title"
                                name="newNoteTitle"
                                placeholder="New note title"
                                defaultValue={newNoteTitle}
                                onChange={handleInputs}
                            />
                        </div>
                    </div>
                    <div className="row mx-auto justify-content-between">
                        <div className="col-6">
                            <Textarea
                                key="new_note_desc"
                                name="newNoteDesc"
                                placeholder="New Note Text"
                                onChange={handleInputs}
                                defaultValue={newNoteDesc}
                            />
                        </div>
                    </div>
                    <div className="row mx-auto justify-content-between">
                        <div className="col-6">
                            <Button text="Add" onClick={handleAddNote} buttonType={ButtonTypeEnum.add}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <hr />
        <section className="add_notes_list">
            {notes?.map((note) => (
                <Note key={note.id} data={note} onChange={handleNoteChange} onRemove={handleNoteRemove}/>
            ))}
        </section>
    </div>);
};

export default NotepadModule;
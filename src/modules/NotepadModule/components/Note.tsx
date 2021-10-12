import React from "react";
import Button, {ButtonTypeEnum} from "../../../components/button";
import {Input} from "../../../components";
import Textarea from "../../../components/textarea";
import {INote} from "../Interfaces";
import "./Note.styles.scss";

interface IProps {
    onChange?: (key: string, value: string, id: string) => void;
    onRemove?: (data: INote) => void;
    mode?: string,
    onAdd?: (data: INote) => void;
    id?: string;
    data?: INote
}

const Note: React.FC<IProps> = ({data, onChange, onRemove, onAdd , mode}) => {
    const title = data?.title || "";
    const description= data?.description || "";
    const noteId = data?.id || "";
    const noteData = data || {title:"", description: "", id: ""};

    const handleChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        let key = '';
        switch (e.currentTarget.name) {
            case 'change_note_title':
                key = "title"
                break;
            case 'change_note_desc':
                key = "description"
                break;
            default:
                return false;
        }
        // @ts-ignore
        onChange(key, e.currentTarget.value, noteId);
    };

    const handleRemove = () =>{
        // @ts-ignore
        onRemove(noteData);
    }

    const handleAdd = () => {
        // @ts-ignore
        onAdd(noteData)
    }

    return (
        <div className="row ">
            <div className="col">
                <div className="row mx-auto justify-content-between">
                    <div className="col-6">
                        <Input
                            name="change_note_title"
                            placeholder="Change note title"
                            defaultValue={title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <Button
                            text="Delete"
                            onClick={handleRemove}
                            buttonType={ButtonTypeEnum.delete}
                        />
                    </div>
                </div>
                <div className="row mx-auto justify-content-between">
                    <div className="col-6">
                        <Textarea
                            name="change_note_desc"
                            placeholder="Change Note Text"
                            onChange={handleChange}
                            defaultValue={description}
                        />
                    </div>
                </div>
                {(mode === "create")?(<div className="row mx-auto justify-content-between">
                        <div className="col-6">
                            <Button text="Add" onClick={handleAdd} buttonType={ButtonTypeEnum.add}/>
                        </div>
                    </div>):(<div></div>)}


            </div>
        </div>
    );
};

export default Note;

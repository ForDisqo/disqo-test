import React from "react";
import {v4 as uuidv4} from "uuid";

interface IProps {
    placeholder: string;
    name: string;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    defaultValue?: string;
    id?: string;
}

const NotepadModule: React.FC<IProps> = ({ id = uuidv4(), placeholder, ...rest }) => {
    return (
        <div className="form-group">
            <input type='text' contentEditable={true} disabled={false} id={id} placeholder={placeholder} className="form-control" {...rest} />
        </div>
    );
};

export default NotepadModule;
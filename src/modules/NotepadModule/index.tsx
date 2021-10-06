import React from "react";
import {v4 as uuidv4} from "uuid";

interface IProps {
    createMode?: boolean;
}

const NotepadModule: React.FC<IProps> = ({ createMode }) => {
    return (
        <div className="container">

        </div>
    );
};

export default NotepadModule;
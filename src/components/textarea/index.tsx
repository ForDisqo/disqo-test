import {v4 as uuidv4} from 'uuid';
import React from "react";
import "./Textarea.styles.scss";

interface IProps {
    placeholder: string;
    name: string;
    id?: string;
    onChange?: (e?: any) => void;
    onBlur?: () => void;
    defaultValue?: string;
}

const Textarea: React.FC<IProps> = ({id = uuidv4(),...rest}) => {
    return (
        <div className="form-group">
              <textarea  id={id} rows={3} className="form-control"   {...rest} />
        </div>
    );
};

export default Textarea;

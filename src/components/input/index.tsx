import {v4 as uuidv4} from 'uuid';
import React from "react";
import "./Input.styles.scss";

interface IProps {
  placeholder: string;
  name: string;
  onChange?: (e: any) => void;
  onBlur?: () => void;
  defaultValue?: string;
  id?: string;
}

const Input: React.FC<IProps> = ({ id = uuidv4(), placeholder, ...rest }) => {
  return (
    <div className="form-group">
        <input type='text' contentEditable={true} disabled={false} id={id} placeholder={placeholder}
               className="form-control" {...rest} />
    </div>
  );
};

export default Input;

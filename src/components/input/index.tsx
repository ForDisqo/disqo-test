import {v4 as uuidv4} from 'uuid';
import React from "react";
import "./Input.styles.scss";

interface IProps {
  placeholder: string;
  name: string;
  value?: string;
  id?: string;
}

const Input: React.FC<IProps> = ({ id = uuidv4(), placeholder, ...rest }) => {
  return (
    <div className="form-group">
        <input id={id} placeholder={placeholder} className="form-control" {...rest} />
    </div>
  );
};

export default Input;

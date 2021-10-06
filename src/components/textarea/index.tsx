import {v4 as uuidv4} from 'uuid';
import React from "react";
import "./Textarea.styles.scss";

interface IProps {
  placeholder: string;
  name: string;
  id?: string;
  children?: React.ReactChild | React.ReactNode;
}

const Textarea: React.FC<IProps> = ({ id = uuidv4(), children , ...rest }) => {
  return (
    <div className="form-group">
      <textarea id={id}  rows={3} className="form-control"   {...rest}>
          {children}
      </textarea>
    </div>
  );
};

export default Textarea;

import {v4 as uuidv4} from 'uuid';
import React from "react";
import "./Card.styles.scss";

interface IProps {
    title: string;
    notesLength?: number,
    id?: string;
    key?: string;
    onChange?: (e?: any) => void;
    onBlur?: () => void;
    createdAt?: string | Date;
}

const Card: React.FC<IProps> = ({id = uuidv4(),notesLength, createdAt, title, ...rest}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <a href="#" className="btn btn-primary">{title}</a>
                </div>
                <div className="col-6">
                    {createdAt}
                </div>
            </div>
        </div>
    );
};

export default Card;

import React from "react";
import "./Button.styles.scss";

export const enum ButtonTypeEnum {
    add = "green",
    create = 'green',
    edit = 'blue',
    save = 'blue',
    delete = 'red',
    view = 'view',
}


interface IProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    className?: string;
    b: ButtonTypeEnum
}

const Button: React.FC<IProps> = ({text, b, ...rest}) => {
    return <button type="button" className={b +" btn"} {...rest}>{text}</button>;
};

export default Button;

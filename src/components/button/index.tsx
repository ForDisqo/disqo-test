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
    onClick: (e:any) => void;
    disabled?: boolean;
    className?: string;
    buttonType: ButtonTypeEnum
}

const Button: React.FC<IProps> = ({text, buttonType, ...rest}) => {
    return <button type="button" className={buttonType +" btn"} {...rest}>{text}</button>;
};

export default Button;

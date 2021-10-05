import React from "react";

interface IProps {
    children: JSX.Element;
}

const Notepad: React.FC<IProps> = ({ children }) => {
    return <div> {children} </div>;
};

export default Notepad;
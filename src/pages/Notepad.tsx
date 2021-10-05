import React from "react";

interface IProps {
    children: JSX.Element;
}

const Notepad: React.FC<IProps> = ({ children }) => {
    return children;
};

export default Notepad;
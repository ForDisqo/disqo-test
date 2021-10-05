import React from "react";

interface IProps {
    children: JSX.Element;
}

const NotFound: React.FC<IProps> = ({ children }) => {
    return <div> 404 {children} </div>;
};

export default NotFound;
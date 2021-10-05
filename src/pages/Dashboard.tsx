import React from "react";

interface IProps {
    children: JSX.Element;
}

const Dashboard: React.FC<IProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default Dashboard;
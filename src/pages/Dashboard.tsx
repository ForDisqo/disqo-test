import React from "react";

interface IProps {
    children: JSX.Element;
}

const Dashboard: React.FC<IProps> = ({ children }) => {
    return <div><h1>Dashboard</h1>{children}</div>;
};

export default Dashboard;
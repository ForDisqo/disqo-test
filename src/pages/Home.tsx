import React from "react";

interface IProps {
    children: JSX.Element;
}

const Home: React.FC<IProps> = ({ children }) => {

    return (<div className="container">
        {children}
    </div>);
};

export default Home;
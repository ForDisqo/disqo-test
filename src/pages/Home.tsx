import React from "react";
import Button, {ButtonTypeEnum} from "../components/button";
import Input from "../components/input";
import Textarea from "../components/textarea";

interface IProps {
    children: JSX.Element;
}

const Home: React.FC<IProps> = ({ children }) => {

    return (<div className="container">
        {children}
    </div>);
};

export default Home;
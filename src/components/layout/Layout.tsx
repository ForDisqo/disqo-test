import React from "react";
import "./Layout.style.scss";

export enum ThemeEnum {
    light= "light",
    dark = "dark",
}

interface IProps {
    children: JSX.Element
    theme: ThemeEnum;
}

const Layout: React.FC<IProps> = ({theme, children}) => {
    return (<div className={theme}>
        <h1>Notepad Application</h1>
        <div className="card layout-body">
            <div className="card-body">
                {children}
            </div>
        </div>
    </div>);
};

export default Layout;

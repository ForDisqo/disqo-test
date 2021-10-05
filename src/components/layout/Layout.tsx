import React from "react";
import "./Layout.style.scss";

export enum Theme {
    light= "light",
    dark = "dark",
}

interface IProps {
    children: React.ReactChild | React.ReactNode;
    theme: Theme;
}

const Layout: React.FC<IProps> = ({theme, children}) => {
    return (<section className="wrapper"><div className={theme+' container bd-example'}>
        <div className="card">
            <div className="card-body">
                {children}
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
    </div></section>);
};

export default Layout;

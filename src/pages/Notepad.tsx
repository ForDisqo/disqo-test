import React, {useState} from "react";
import NotepadModule, {MODES} from "../modules/NotepadModule";
import {useLocation} from "react-router";

const Notepad = () => {
    const [mode, setMode] = useState(MODES.CREATE)
    const location = useLocation();

    React.useEffect(() => {
        if(location.pathname !== "/create"){setMode(MODES.UPDATE)}
    });
    return <NotepadModule NotepadMode={mode} />;
};

export default Notepad;
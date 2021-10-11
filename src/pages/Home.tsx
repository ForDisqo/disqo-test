import React from "react";
import {INotepad} from "../modules/NotepadModule/Interfaces";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {RootState} from "./../redux/reducers"
import {Link} from "react-router-dom"
import {getNotepads} from "../modules/NotepadModule/redux/actions";
import {v4 as uuidv4} from "uuid";

interface IProps {
    children: JSX.Element;
}

const Home: React.FC<IProps> = ({children}) => {
    const dispatch = useDispatch();
    React.useEffect(() => {dispatch(getNotepads());}, [dispatch]);
    const notepads: INotepad[] = useSelector((state: RootState) => state.notepads.data, shallowEqual);

    return (<div className="container">
        <div className="row">
            <div className="col-8"><h3>Notepads list</h3></div>
            <div className="col-4">
                <Link  to={"/notepads/create"}>Create new one</Link>
            </div>
        </div>



        <br />
        {!notepads.length ? (<h1>You don't have any notepads yet (</h1>) : (<ul className="list-group ">
            {notepads?.map((notepad: INotepad) => (
                <li key={uuidv4()} className="list-group-item">
                    <Link  to={"/notepads/"+notepad.id}>{notepad.title}</Link>
                </li>
            ))}
        </ul>)}
        {children}
    </div>);
};

export default Home;
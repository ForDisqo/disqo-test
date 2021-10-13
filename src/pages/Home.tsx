import React from "react";
import {INotepad} from "../modules/NotepadModule/Interfaces";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {RootState} from "./../redux/reducers"
import {Link} from "react-router-dom"
import {getNotepads} from "../modules/NotepadModule/redux/actions";
import {v4 as uuidv4} from "uuid";
import {Paths} from "../config/enum/Paths";
import Button, {ButtonTypeEnum} from "../components/button";

interface IProps {
    children: JSX.Element;
}

const Home: React.FC<IProps> = ({children}) => {
    const dispatch = useDispatch();
    React.useEffect(() => {dispatch(getNotepads());}, [dispatch]);
    const notepads: INotepad[] = useSelector((state: RootState) => state.notepads.data, shallowEqual);

    return (<div className="container">
        <div className="row justify-content-between">
            <div className="col-6"><h3>Notepads list</h3></div>
            <div className="col-6 d-flex justify-content-end">
                <Link  to={Paths.CREATE_NOTEPAD} className="float-right">
                    <Button
                        text="Create new one"
                        onClick={() => {}}
                        buttonType={ButtonTypeEnum.view}/>
                </Link>
                <Link  to={Paths.DASHBOARD} className="float-right">
                    <Button
                        text="View state"
                        onClick={() => {}}
                        buttonType={ButtonTypeEnum.view}/>
                </Link>
            </div>
        </div>

        <br />
        <br />
        <hr />

        {!notepads.length ? (<h1>Please wait</h1>) : (<ul className="list-group ">
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
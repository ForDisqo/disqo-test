import React from "react";
import Button, {ButtonTypeEnum} from "../components/button";
import Input from "../components/input";
import Textarea from "../components/textarea";

interface IProps {
    children: JSX.Element;
}

const Notepad: React.FC<IProps> = ({ children }) => {

    const handleClick = () => {
        alert(true)
    };
    const handleChange = () => {
        console.log(true)
    };

    return (<div className="container">
        <form className="editable-form">
            <section className="title_of_notepad">
                <div className="row mx-auto justify-content-between">
                    <div className="col-6">
                        <Input
                            name="notepad"
                            placeholder="notepad title"
                            defaultValue=""
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-6">
                        <div className="row mx-auto justify-content-end">
                            <div className="col-3">
                                <Button
                                    text="View State"
                                    onClick={handleClick}
                                    buttonType={ButtonTypeEnum.view}
                                />
                            </div>
                            <div className="col-3">
                                <Button
                                    text="Save"
                                    onClick={handleClick}
                                    buttonType={ButtonTypeEnum.save}
                                />
                            </div>
                            <div className="col-3">
                                <Button
                                    text="Delete"
                                    onClick={handleClick}
                                    buttonType={ButtonTypeEnum.delete}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="add_new_note">
                <div className="row " >
                    <div className="col">
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Input
                                    name="title"
                                    placeholder="New note title"
                                    defaultValue="New note title"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Textarea name="title_new_note" placeholder="New Note Text">
                                    New Note Text
                                </Textarea>
                            </div>
                        </div>
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Button
                                    text="Add"
                                    onClick={handleClick}
                                    buttonType={ButtonTypeEnum.add}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="list_of_notes">
                <div className="row " >
                    <div className="col">
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Input
                                    name="title"
                                    placeholder="New note title"
                                    defaultValue="New note title"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-6">
                                <Button
                                    text="Delete"
                                    onClick={handleClick}
                                    buttonType={ButtonTypeEnum.delete}
                                />
                            </div>
                        </div>
                        <div className="row mx-auto justify-content-between">
                            <div className="col-6">
                                <Textarea name="title_new_note" placeholder="New Note Text">
                                    New Note Text
                                </Textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>
        {children}
    </div>);
};

export default Notepad;
import { useState } from "react";
import EditCV from "./components/editComponents/main";
import Generate from "./components/generateComponents/generateCV";

export default function App() {
    const [isEditing, setIsEditing] = useState(0);
    const [resume, setResume] = useState({
        "Personal" : {"name":"", "email":"", "address":"", "telephone":"", "role":""},
        "Education" : [],
        "Work" : [],

    });

    function handleEditCvBtnClick() {
        setIsEditing(0);
    }

    function handleGenerateCvBtnClick() {
        setIsEditing(1);
    }

    return (
        <>
        {isEditing === 0 ? <EditCV generateEventHandler={handleGenerateCvBtnClick} currentResume={resume} updateResume={setResume}/> : <Generate editEventHandler={handleEditCvBtnClick} currentResume={resume} updateResume={setResume}/>}
        </>
    )
}
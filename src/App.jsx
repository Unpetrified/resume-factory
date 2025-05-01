import { useState } from "react";
import EditCV from "./components/editComponents/main";
import Generate from "./components/generateComponents/generateCV";

export default function App() {
    const [isEditing, setIsEditing] = useState(0);
    const [resume, setResume] = useState({});

    function handleEditCvBtnClick() {
        setIsEditing(0);
        setResume((prevResume) => { // delete entry on the resume
            const newResume = {...prevResume};
            delete newResume["text"]
            return newResume
        });
        
    }

    function handleGenerateCvBtnClick() {
        setIsEditing(1);
        setResume({...resume, "mode":"edit", "text":"true"}); 
    }

    return (
        <>
        {isEditing === 0 ? <EditCV generateEventHandler={handleGenerateCvBtnClick} currentResume={resume} updateResume={setResume}/> : <Generate editEventHandler={handleEditCvBtnClick} currentResume={resume} updateResume={setResume}/>}
        <h2>{Object.entries(resume)}</h2>
        </>
    )
}
import PersonalInfo from "./personalInfo";

export default function EditCV({generateEventHandler, currentResume, updateResume}) {
    
    return (
        <>
        <button onClick={generateEventHandler}>Generate</button>
        <PersonalInfo resume={currentResume} setResume={updateResume}/>
        </>
    )
}
import Education from "./education";
import PersonalInfo from "./personalInfo";

export default function EditCV({generateEventHandler, currentResume, updateResume}) {
    
    return (
        <>
        <button onClick={generateEventHandler}>Generate</button>
        <form>
            <PersonalInfo resume={currentResume} setResume={updateResume}/>
            <Education resume={currentResume} setResume={updateResume}/>
        </form>
        </>
    )
}
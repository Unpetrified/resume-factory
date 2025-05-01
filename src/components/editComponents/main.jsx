import Education from "./education";
import PersonalInfo from "./personalInfo";
import Work from "./work";

export default function EditCV({generateEventHandler, currentResume, updateResume}) {
    
    return (
        <>
        <form>
            <PersonalInfo resume={currentResume} setResume={updateResume} />
            <Education resume={currentResume} setResume={updateResume} />
            <Work resume={currentResume} setResume={updateResume} />
            <input type="submit" value="Generate" onClick={generateEventHandler}/>
        </form>
        </>
    )
}
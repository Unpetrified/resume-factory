import Education from "./education";
import PersonalInfo from "./personalInfo";
import Work from "./work";
import "../../style/main.css";
import Custom from "./otherInfo";

export default function EditCV({generateEventHandler, currentResume, updateResume}) {
    
    return (
        <>
        <form>
            <PersonalInfo resume={currentResume} setResume={updateResume} />
            <Education resume={currentResume} setResume={updateResume} />
            <Work resume={currentResume} setResume={updateResume} />
            <Custom resume={currentResume} setResume={updateResume}/>
            <input className="generate" type="submit" value="Preview" onClick={generateEventHandler}/>
        </form>
        </>
    )
}
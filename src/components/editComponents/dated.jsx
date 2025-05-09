import Input, { Checkbox, TextArea } from "./form elements";
import deleteIcon from "../../assets/delete.svg";

export default function DatedField({currentResume, updateResume}) {

    function addWork(e) {
        e.preventDefault()
        
        const newResume = {...currentResume},

            newWork = {
                "name":"", 
                "position":"", 
                "start":"", 
                "isCurrent":true, 
                "end":"Present",
                "experience":[],
                "key":crypto.randomUUID()
            };

        newResume["Work"].push(newWork);
        updateResume(newResume);
    }

    function removeWork(e, index) {
        e.preventDefault();
        
        const newResume = {...currentResume};
        newResume["Work"].splice(index, 1);

        updateResume(newResume);
    }

    function update(e, element, index, r_index=0) {
        const newResume = {...currentResume};
        if(element === "isCurrent") {
            newResume["Work"][index][element] = e.target.checked; 
            element ? newResume["Work"][index]["end"] = "Present" : "";
        }
        else if(element === "experience") newResume["Work"][index]["experience"][r_index]["value"] = e.target.value;
        else newResume["Work"][index][element] = e.target.value;

        updateResume(newResume)
    }

    function addResponsibility(e, index) {
        e.preventDefault();

        const newResume = {...currentResume},
            newResponsibility = {
                "value":"",
                "key":crypto.randomUUID()
            }

        newResume["Work"][index]["experience"].push(newResponsibility);

        updateResume(newResume);

    }

    function removeResponsibility(e, index, r_index) {
        e.preventDefault();
        
        const newResume = {...currentResume};
        newResume["Work"][index]["experience"].splice(r_index, 1);

        updateResume(newResume);
    }

    return (
        <fieldset>
            <legend>Work Experience*</legend>
            {currentResume["Work"].map((job, index) => {

            return <section className="work" key={job["key"]}>
                    <button className="delete-btn" onClick={(e) => removeWork(e, index)}><img src={deleteIcon} alt="delete button"/></button>
                    <Input label="Company Name" id={index+"name"} value={job["name"]} handleChange={(e) => update(e, "name", index)}/>
                    <Input label="Role" id={index+"role"} value={job["position"]} handleChange={(e) => update(e, "position", index)}/>
                    <Input label="Start Date" id={index+"start"} value={job["start"]} handleChange={(e) => update(e, "start", index)} type="date"/>
                    <Checkbox label="I currently work here" id={index+"status"} value={job["isCurrent"]} type="checkbox" handleChange={(e) => update(e, "isCurrent", index)}/>
                    {job["isCurrent"] ? "" : <Input label="End Date" id={index+"end"} value={job["end"]} handleChange={(e) => update(e, "end", index)} type="date"/>}
                    <ul>
                        {job["experience"].map((responsibility, r_index) => {
                            return <li key={responsibility["key"]}>
                                <TextArea key={responsibility["key"]} label={"Responsibility "+Number.parseInt(r_index+1)} id={responsibility["key"]} value={responsibility["value"]} handleChange={(e) => update(e, "experience", index, r_index)}/>
                                <button className="delete-btn" onClick={(e) => removeResponsibility(e, index, r_index)}><img src={deleteIcon} alt="delete button"/></button>
                            </li>
                            
                        })}
                        <button className="responsibility" onClick={(e) => addResponsibility(e, index)}>Add Responsibility</button>
                    </ul>
                </section>
            })}            
            <button onClick={addWork}>Add Work Experience</button>
        </fieldset>
    )
}
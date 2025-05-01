import React from "react";
import Input, { Checkbox } from "./form elements";

export default function Education({resume, setResume}) {

    function addSchool(e) {
        e.preventDefault()
        
        const newResume = {...resume},
            today = new Date().toISOString().split("T")[0],

            newSchool = {
                "name":"", 
                "degree":"", 
                "start":"", 
                "isCurrent":true, 
                "end":today,
                 "key":crypto.randomUUID()
            };

        newResume["Education"].push(newSchool);
        setResume(newResume);
    }

    function update(e, element, index) {
        const newResume = {...resume};
        if(element === "isCurrent") newResume["Education"][index][element] = e.target.checked; 
        else newResume["Education"][index][element] = e.target.value;

        setResume(newResume)
    }
    return (
        <fieldset>
            <legend>Education</legend>
            {resume["Education"].map((school, index) => {

            return <React.Fragment key={school["key"]}>
                    <Input label="School Name" id={index+"name"} value={school["name"]} handleChange={(e) => update(e, "name", index)}/>
                    <Input label="Degree Obtained" id={index+"deg"} value={school["degree"]} handleChange={(e) => update(e, "degree", index)}/>
                    <Input label="Start Date" id={index+"start"} value={school["start"]} handleChange={(e) => update(e, "start", index)} type="date"/>
                    <Checkbox label="I currently study here" id={index+"status"} value={school["isCurrent"]} type="checkbox" handleChange={(e) => update(e, "isCurrent", index)}/>
                    {school["isCurrent"] ? "" : <Input label="End Date" id={index+"end"} value={school["end"]} handleChange={(e) => update(e, "end", index)} type="date"/>}
                </React.Fragment>
            })}            
            <button onClick={addSchool}>Add School</button>
        </fieldset>
    )
}
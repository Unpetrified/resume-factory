import Input, { Checkbox, TextArea } from "./form elements";
import deleteIcon from "../../assets/delete.svg";

export default function DatedField({currentResume, updateResume, i}) {

    function addDated(e) {
        e.preventDefault()
        
        const newResume = {...currentResume},

            newDated = {
                "name":"", 
                "position":"", 
                "start":"", 
                "isCurrent":true, 
                "end":"Present",
                "experience":[],
                "key":crypto.randomUUID()
            };

        newResume["Custom"][i]["dated"].push(newDated);
        updateResume(newResume);
    }

    function removeDated(e, index) {
        e.preventDefault();
        
        const newResume = {...currentResume};
        newResume["Custom"][i]["dated"].splice(index, 1);

        updateResume(newResume);
    }

    function update(e, element, index, r_index=0) {
        const newResume = {...currentResume};
        
        if(element === "isCurrent") {
            newResume["Custom"][i]["dated"][index][element] = e.target.checked; 
            e.target.checked ?  newResume["Custom"][i]["dated"][index]["end"] = "Present" : newResume["Custom"][i]["dated"][index]["end"] = "";
        }
        else if(element === "experience") newResume["Custom"][i]["dated"][index]["experience"][r_index]["value"] = e.target.value;
        else newResume["Custom"][i]["dated"][index][element] = e.target.value;

        updateResume(newResume)
    }

    function addResponsibility(e, index) {
        e.preventDefault();

        const newResume = {...currentResume},
            newResponsibility = {
                "value":"",
                "key":crypto.randomUUID()
            }

        newResume["Custom"][i]["dated"][index]["experience"].push(newResponsibility);

        updateResume(newResume);

    }

    function removeResponsibility(e, index, r_index) {
        e.preventDefault();
        
        const newResume = {...currentResume};
        newResume["Custom"][i]["dated"][index]["experience"].splice(r_index, 1);

        updateResume(newResume);
    }

    return (
        <fieldset className="dated-field">
            <legend>{currentResume["Custom"][i]["name"]}</legend>
            {currentResume["Custom"][i]["dated"].map((dated_field, index) => {

            return <section className="work dated-fields" key={dated_field["key"]}>
                    <button className="delete-btn" onClick={(e) => removeDated(e, index)}><img src={deleteIcon} alt="delete button"/></button>
                    <Input label="Name of Organization" id={index+"name"} value={dated_field["name"]} handleChange={(e) => update(e, "name", index)}/>
                    <Input label="Role" id={index+"role"} value={dated_field["position"]} handleChange={(e) => update(e, "position", index)}/>
                    <Input label="Start Date" id={index+"start"} value={dated_field["start"]} handleChange={(e) => update(e, "start", index)} type="date"/>
                    <Checkbox label="I currently work here" id={index+"status"} value={dated_field["isCurrent"]} type="checkbox" handleChange={(e) => update(e, "isCurrent", index)}/>
                    {dated_field["isCurrent"] ? "" : <Input label="End Date" id={index+"end"} value={dated_field["end"]} handleChange={(e) => update(e, "end", index)} type="date"/>}
                    <ul>
                        {dated_field["experience"].map((responsibility, r_index) => {
                            return <li key={responsibility["key"]} className="dated-fields-exp">
                                <TextArea key={responsibility["key"]} label={"Responsibility "+Number.parseInt(r_index+1)} id={responsibility["key"]} value={responsibility["value"]} handleChange={(e) => update(e, "experience", index, r_index)}/>
                                <button className="delete-btn" onClick={(e) => removeResponsibility(e, index, r_index)}><img src={deleteIcon} alt="delete button"/></button>
                            </li>
                            
                        })}
                        <button className="responsibility" onClick={(e) => addResponsibility(e, index)}>Add Responsibility</button>
                    </ul>
                </section>
            })}            
            <button onClick={addDated}>Add {currentResume["Custom"][i]["name"]} Experience</button>
        </fieldset>
    )
}
import DatedField from "./dated";
import ListField from "./list";
import Input, { Select } from "./form elements";
import deleteIcon from "../../assets/delete.svg";

export default function Custom({resume, setResume}) {
    function addCustom(e, resume, setResume) {
        e.preventDefault()
        
        const newResume = {...resume},

            newCustom = {
                "name":"", 
                "type":"list",
                "list":[],
                "dated":[], 
                "key":crypto.randomUUID()
            };

        newResume["Custom"].push(newCustom);
        setResume(newResume);
    }

    function removeCustom(e, index) {
        e.preventDefault()
        
        const newResume = {...resume};
        newResume["Custom"].splice(index, 1);

        setResume(newResume);
    }

    function update(e, element, index, r_index=0) {
        const newResume = {...resume};
        
        if(element === "list") {
            newResume["Custom"][index][element][r_index]["value"] = e.target.value;
        }
        else newResume["Custom"][index][element] = e.target.value;

        setResume(newResume)
    }

    return (
        <fieldset className="custom-fields">
            <legend>Custom Fields</legend>
            {resume["Custom"].map((custom_field, index) => {
                return (
                    <section key={custom_field["key"]}>
                        <button className="delete-btn" onClick={(e) => removeCustom(e, index)}><img src={deleteIcon} alt="delete button"/></button>
                        <Input label="Field Name" id={custom_field["key"]+"name"} value={custom_field["name"]} handleChange={(e) => update(e, "name", index)} class_name="field-name"/>
                        <Select id={custom_field["key"]+"selection"} value={custom_field["type"]} handleChange={(e) => update(e, "type", index)} class_name="select"/>
                        {custom_field["type"] === "list" ? <ListField currentResume={resume} updateResume={setResume} i={index} updateFn={update}/> : <DatedField currentResume={resume} updateResume={setResume} i={index}/>}
                    </section>
                )
            })}
            <button onClick={(e) => addCustom(e, resume, setResume)}>Add Custom Field</button>
        </fieldset>
    )
}
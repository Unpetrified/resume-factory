import Input, { TextArea } from "./form elements";
import deleteIcon from "../../assets/delete.svg";

export default function ListField({currentResume, updateResume, i, updateFn}) {

    function addResponsibility(e) {
        e.preventDefault();

        const newResume = {...currentResume},
            newResponsibility = {
                "value":"",
                "key":crypto.randomUUID()
            }

        newResume["Custom"][i]["list"].push(newResponsibility);

        updateResume(newResume);

    }

    function removeResponsibility(e, r_index) {
        e.preventDefault();
        
        const newResume = {...currentResume};
        newResume["Custom"][i]["list"].splice(r_index, 1);

        updateResume(newResume);
    }

    return (
    <>
        <h3 className="list-field-legend">{currentResume["Custom"][i]["name"]}</h3>
        <ul>
            {currentResume["Custom"][i]["list"].map((responsibility, r_index) => {
                return <li key={responsibility["key"]}>
                    <TextArea key={responsibility["key"]} label={currentResume["Custom"][i]["name"]+" "+Number.parseInt(r_index+1)} id={responsibility["key"]} value={responsibility["value"]} handleChange={(e) => updateFn(e, "list", i, r_index)}/>
                    <button className="delete-btn" onClick={(e) => removeResponsibility(e, r_index)}><img src={deleteIcon} alt="delete button"/></button>
                </li>
                
            })}
            <button className="responsibility" onClick={addResponsibility}>Add {currentResume["Custom"][i]["name"]}</button>
        </ul>
    </>)
}
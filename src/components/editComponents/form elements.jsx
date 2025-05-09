export default function Input({label, id, value, handleChange, type="text", class_name=""}) {

    return (
        <>
        <label htmlFor={id}>{label}: </label>
        <input type={type} className={class_name} id={id} value={value} onChange={handleChange}/>
        </>
    )
}

export function Checkbox({label, id, value, handleChange, type="checkbox", class_name="checkbox"}) {

    return (
        <div className="checkbox-container">
        <input type={type} className={class_name} id={id} checked={value}  onChange={handleChange}/>
        <label htmlFor={id}>{label}: </label>
        </div>
    )
}

export function TextArea({label, id, value, handleChange, class_name=""}) {

    return (
        <>
        <label htmlFor={id}>{label}: </label>
        <textarea className={class_name} id={id} value={value} onChange={handleChange}></textarea>
        </>
    )
}

export function Select({id, value, handleChange, class_name=""}) {

    return (
        <>
        <label htmlFor={id}>What type of field is this? (List for fields like skills, certifications etc. Dated for fields like Volunteering experiences.)</label>
        <select className={class_name} id={id} value={value} onChange={handleChange}>
            <option value="list">List</option>
            <option value="dated">Dated</option>
        </select>
        </>
    )
}
export default function Input({label, id, value, handleChange, type="text", class_name=""}) {

    return (
        <>
        <label htmlFor={id}>{label}: </label>
        <input type={type} className={class_name} id={id} value={value} onChange={handleChange}/>
        </>
    )
}

export function Checkbox({label, id, value, handleChange, type="checkbox", class_name=""}) {

    return (
        <>
        <input type={type} className={class_name} id={id} checked={value}  onChange={handleChange}/>
        <label htmlFor={id}>{label}: </label>
        </>
    )
}
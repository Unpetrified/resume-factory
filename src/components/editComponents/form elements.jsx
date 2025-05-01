export default function Input({label, id, value, handleChange, type="text", class_name=""}) {

    return (
        <>
        <label htmlFor={id}>{label}: </label>
        <input type={type} className={class_name} id={id} value={value} onChange={handleChange}/>
        </>
    )
}
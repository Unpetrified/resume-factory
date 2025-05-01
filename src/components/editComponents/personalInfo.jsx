import Input from "./form elements";

export default function PersonalInfo({resume, setResume}) {
    
    function updateName(e) {
        const newResume = {...resume};
        newResume["Personal"]["name"] = e.target.value;
        setResume(newResume)
    }

    return (
        <>
        <h2>Personal Information</h2>
        <form>
            <Input label="Name" id="name" value={resume["Personal"]["name"]} onChange={updateName}/>
        </form>
        </>
    )
}
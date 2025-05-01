import Input from "./form elements";

export default function PersonalInfo({resume, setResume}) {
    
    function update(e, element) {
        const newResume = {...resume};
        newResume["Personal"][element] = e.target.value;
        setResume(newResume)
    }

    return (
        <fieldset>
            <legend>Personal Information*</legend>
            <Input label="Name" id="name" value={resume["Personal"]["name"]} handleChange={(e) => update(e, "name")}/>
            <Input label="Email" id="email" value={resume["Personal"]["email"]} handleChange={(e) => update(e, "email")} type="email"/>
            <Input label="Address" id="addr" value={resume["Personal"]["address"]} handleChange={(e) => update(e, "address")}/>
            <Input label="Phone" id="phone" value={resume["Personal"]["telephone"]} handleChange={(e) => update(e, "telephone")} type="number"/>
            <Input label="Role" id="role" value={resume["Personal"]["role"]} handleChange={(e) => update(e, "role")}/>
        </fieldset>
    )
}
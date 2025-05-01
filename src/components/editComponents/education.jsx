export default function Education({resume, setResume}) {
    return (
        <fieldset>
            <legend>Education</legend>
            <Input label="School Name" id="sch-name" value={resume["Personal"]["name"]} handleChange={(e) => update(e, "name")}/>
            <Input label="Email" id="email" value={resume["Personal"]["email"]} handleChange={(e) => update(e, "email")} type="email"/>
                        
            <button>Add School</button>
        </fieldset>
    )
}
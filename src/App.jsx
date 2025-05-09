import { useState } from "react";
import EditCV from "./components/editComponents/main";
import Generate from "./components/generateComponents/generateCV";
import logo from "./assets/book-cog-outline.svg";
import "./style/App.css";

export default function App() {
    const [isEditing, setIsEditing] = useState(0);
    const [resume, setResume] = useState({
        "Personal" : {"name":"", "email":"", "address":"", "telephone":"", "role":""},
        "Education" : [],
        "Work" : [],
        "Custom" : [],
    });

    function handleEditCvBtnClick() {
        setIsEditing(0);
    }

    function handleGenerateCvBtnClick() {
        setIsEditing(1);
    }

    return (
        <>
        <Header />
        {isEditing === 0 ? <EditCV generateEventHandler={handleGenerateCvBtnClick} currentResume={resume} updateResume={setResume}/> : <Generate editEventHandler={handleEditCvBtnClick} currentResume={resume} />}
        <Footer />
        </>
    )
}

function Header () {
    return (
        <header>
            <img src={logo} className="logo" alt="resume factory logo"/>
            <h1>Resume Factory</h1>
        </header>
    )
}

function Footer () {
    return (
        <footer>
            <p className="copyright">Copyright © Unpetrified 2025</p>
        </footer>
    )
}
import emailIcon from '../../assets/email-outline.svg';
import mapIcon from '../../assets/map-marker.svg';
import phoneIcon from '../../assets/phone.svg';
import jobIcon from '../../assets/briefcase-variant-outline.svg';
import "../../style/generateCv.css"
import Buttons from './save';

export default function Generate({editEventHandler, currentResume}) {
    return (
        <main>
            <div className="resume">
                <section className="personal-info">
                <h2>{currentResume["Personal"]["name"]}</h2>
                <div className="div-name-hr"></div>
                <section className="contact">
                    <div><img src={phoneIcon} className='contact-icon'/><span>{currentResume["Personal"]["telephone"]}</span></div>
                    <div><img src={emailIcon} className='contact-icon'/><span>{currentResume["Personal"]["email"]}</span></div>
                    <div><img src={mapIcon} className='contact-icon'/><span>{currentResume["Personal"]["address"]}</span></div>
                    <div><img src={jobIcon} className='contact-icon'/><span>{currentResume["Personal"]["role"]}</span></div>
                </section>
                </section>
                <section className="education">
                    <h3>Education</h3>
                    <div className="div-hr"></div>
                    {currentResume["Education"].map(school => {
                        return (
                            <section key={school["key"]}>
                                <div className="school-header">
                                    <h4 className="school-name">{school["name"]}</h4>
                                    <div><h6 className="start">{school["start"]}</h6> - <h6 className="end">{school["end"]}</h6></div>
                                </div>
                                <div className="degree">{school["degree"]}</div>
                            </section>
                        )
                    })}
                </section>
                <section className="work">
                    <h3>Work</h3>
                    <div className="div-hr"></div>
                    {currentResume["Work"].map(work => {
                        return (
                            <section key={work["key"]}>
                                <div className="work-header">
                                    <h4 className="company-name">{work["name"]}</h4>
                                    <div><h6 className="start">{work["start"]}</h6> - <h6 className="end">{work["end"]}</h6></div>
                                </div>
                                <p className="position">{work["position"]}</p>
                                <ul className="experiences">
                                    {work["experience"].map(exp => {
                                        return (
                                            <li key={exp["key"]}>
                                                {exp["value"]}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </section>
                        )
                    })}
                </section>
                {currentResume["Custom"].map(customField => {
                    if (customField["type"] === "list") return (
                        <section className="custom-list work" key={customField["key"]}>
                            <h3>{customField["name"]}</h3>
                            <div className="div-hr"></div>
                            <ul className="experiences">
                                {customField["list"].map(list => {
                                    return (
                                        <li key={list["key"]}>
                                            {list["value"]}
                                        </li>
                                    )
                                })}
                            </ul>
                        </section>
                    )
                    else return (
                        <section className="custom-dated work" key={customField["key"]}>
                            <h3>{customField["name"]}</h3>
                            <div className="div-hr"></div>
                            {customField["dated"].map(dated => {
                                return (
                                    <section key={dated["key"]}>
                                        <div className="work-header">
                                            <h4 className="company-name">{dated["name"]}</h4>
                                            <div><h6 className="start">{dated["start"]}</h6> - <h6 className="end">{dated["end"]}</h6></div>
                                        </div>
                                        <p className="position">{dated["position"]}</p>
                                        <ul className="experiences">
                                            {dated["experience"].map(exp => {
                                                return (
                                                    <li key={exp["key"]}>
                                                        {exp["value"]}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </section>
                                )
                        })}
                        </section>
                    )
                })}
            </div>
            <Buttons/>
            <button className='edit-btn' onClick={editEventHandler}>Edit</button>
        </main>
    )
}
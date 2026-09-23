function Bio(){
    const bioText = "Frontend developer with 6+ years of exp. Frontend developer with 6+ years of exp. Frontend developer with 6+ years of exp. Frontend developer with 6+ years of exp."
    const skills = ["React", "Javascript", "Css", "Html"];

    return(
        <div className="bio-section">
            <h3>About Me</h3>
            <p className="bio-text">{bioText}</p>
            <h3>Skills</h3>
            <div className="skills-container">
                {skills.map((skill,index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                ))}
            </div>
        </div>
    );
}

export default Bio;
function PersonalInfo(){
    const name = "Tejas Argade";
    const role = "FrontEnd Developer"
    const location = "Pune"
    const email = "targade@gmail.com"
    return(
        <div className="personal-info">
            <h2 className="name">{name}</h2>
            <p className="role">{role}</p>
            <p className="location">{location}</p>
            <p className="email">{email}</p>

        </div>
    )
}

export default PersonalInfo;
import profileImage from "../assets/TejasPhoto.jpg";

function Avatar(){

    return (
        <div className="avatar-container">
             <img src={profileImage} alt="Profile" className="avatar-image"/>
             <div className="avatar-border"></div>
        </div>
    )
}

export default Avatar;
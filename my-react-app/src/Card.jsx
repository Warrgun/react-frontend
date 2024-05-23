import profilePic from "./assets/profile.jpg"
import Button from "./button/Button.jsx"

function Card(){

    return(
        <div className="card">
            <img className="card-img" src={profilePic} alt="Profile picture"></img>
            <h2 className="card-title">Fabio</h2>
            <p className="card-p">Just here to learn react</p>
            <Button/>
        </div>
    );
}

export default Card
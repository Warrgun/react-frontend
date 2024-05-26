import PropTypes from "prop-types"

function Card({
    picture = "https://placehold.co/400", 
    name = "Guest", 
    age = 0,
    isSingle = false
}){

    return(
        <div className="card">
            <img className="card-img" src={picture} alt="Profile picture"></img>
            <h2 className="card-title">{name}, {age}</h2>
            <p className="card-p">{isSingle ? "Wolny":"Zajęty"}</p>
        </div>
    );
}

Card.proptypes ={
    picture: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    isSingle: PropTypes.bool,
}



export default Card
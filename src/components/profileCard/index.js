import React from "react";
import './style.css';

function ProfileCard(props) {
    const [color, setColor] = React.useState("");
    const styles = { backgroundColor: color };
    return (
        <div className="card rounded-circle" style={styles} onMouseEnter={() => setColor(props.color)} onMouseLeave={() => setColor("")}>
            <img src={props.image} className="card-img rounded-circle" alt="Member"></img>
            <div className="card-img-overlay">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    );
}

export default ProfileCard;
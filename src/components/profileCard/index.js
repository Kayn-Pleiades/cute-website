import React from "react";
import './style.css';

function ProfileCard(props) {
    const [color, setColor] = React.useState("");
    const styles = { backgroundColor: color };
    return (
        <div className="card rounded-circle" style={styles} onMouseEnter={() => setColor(props.color)} onMouseLeave={() => setColor("")}>
             <a href={"/"+props.url} className="stretched-link"><img src={props.image} className="card-img rounded-circle" alt="Member"></img></a>
            <div className="card-img-overlay">
                <h2 className="card-title">{props.name}</h2>
            </div>
        </div>
    );
}

export default ProfileCard;
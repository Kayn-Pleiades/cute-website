import React from "react";

function ProfileCard(props) {
    return (
        <div className="card rounded-circle">
            <img src={props.image} className="card-img rounded-circle" alt="Member"></img>
            <div className="card-img-overlay">
                <h5 className="card-title">{props.name}</h5>
            </div>
        </div>
    );
}

export default ProfileCard;
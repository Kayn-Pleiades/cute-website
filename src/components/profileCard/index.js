import React from "react";

function ProfileCard() {
    return (
        <div className="card rounded-circle">
            <img src="https://via.placeholder.com/150" className="card-img rounded-circle" alt="Member"></img>
            <div className="card-img-overlay">
                <h5 className="card-title">Member Name</h5>
            </div>
        </div>
    );
}

export default ProfileCard;
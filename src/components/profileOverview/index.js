import React from "react";
import './style.css';

function ProfileOverview(props) {
    return (
        <div>
            <div className="card">
                <div className="row g-0">
                    <div className="col-md-5">
                        <img src={props.image} className="img-fluid rounded-start" alt="Member"></img>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-text">Member Name</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileOverview;
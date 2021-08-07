import React from "react";
import './style.css';

function ProfileOverview(props) {
    return (
        <div>
            <div className="card rounded-pill">
                <div className="row g-0 align-items-center">
                    <div className="col-md-5">
                        <img src={props.image} className="img-fluid profile-pic" alt="Member"></img>
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <ul style={{ color: props.color }}>
                                        <li className="question">Debut</li>
                                        <li className="question">Birthday</li>
                                        <li className="question">Pronouns</li>
                                        <li className="question">Fanbase Name</li>
                                        <li className="question">Oshi Mark</li>
                                        <li className="question">Stream Content</li>
                                        <li className="question">Model Artist</li>
                                        <li className="question">Model Rig</li>
                                    </ul>
                                </div>
                                <div className="col-md-8">
                                    <ul>
                                        <li className="answer">{props.debut}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileOverview;
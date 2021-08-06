import React from "react";
import Navbar from "../components/navbar";
import ProfileCard from "../components/profileCard";

function Members() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <ProfileCard />
            </div>
        </div>
    );
}

export default Members;
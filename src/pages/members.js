import React from "react";
import MemberContainer from "../components/memberContainer";
import Navbar from "../components/navbar";

function Members() {
    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row d-flex justify-content-center">
                    <div className="col-6">
                        <MemberContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;
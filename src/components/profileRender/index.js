import React from "react";
import { Component } from "react";
import members from "../memberList.json";
import ProfileOverview from "../profileOverview";

class ProfileRender extends Component {
    state = {
        members
    };

    renderOverview = () => {
        return (
            <div>
                <ProfileOverview />
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderOverview()}
            </div>
        );
    }
}

export default ProfileRender;
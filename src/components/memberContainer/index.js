import React from "react";
import { Component } from "react";
import members from "../memberList.json";
import ProfileCard from "../profileCard";

class MemberContainer extends Component {
    state = {
        members
    };

    renderMembers = () => {
        return (
            <div className="row row-cols-4 g-4">
                {this.state.members.map(member => (
                    <div className="col">
                        <ProfileCard
                            image={member.image}
                            name={member.name}
                            color={member.color}
                        />
                    </div>
                ))}
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderMembers()}
            </div>
        );
    }
}

export default MemberContainer;
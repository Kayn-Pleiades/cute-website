  
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "../components/navbar";
import ProfileOverview from '../components/profileOverview';
import members from '../components/memberList.json';
import './profile.css';

function Profile() {
    const [thisMember, setMember] = useState({});
    let { id } = useParams();

    function findMember() {
        for(var i = 0; i < members.length; i++) {
            var obj = members[i];
            if(obj.url === id){
              setMember(obj);
            } 
          }
        };

    useEffect(() => {
       findMember();
    });

    return (
        <div>
            <Navbar />
            <div className="container-fluid">
                <div className="row d-flex text-center justify-content-center">
                    <div className="col pt-5">
                        <p>{thisMember.name}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-7">
                        <ProfileOverview 
                        image={thisMember.image}
                        color={thisMember.color}
                        debut={thisMember.debut}
                        birthday={thisMember.birthday}
                        pronouns={thisMember.pronouns}
                        content={thisMember.content}
                        artist={thisMember.artist}
                        rig={thisMember.rig}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
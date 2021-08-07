  
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileOverview from '../components/profileOverview';
import members from '../components/memberList.json';

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
        <ProfileOverview 
            color={thisMember.color}
        />
      </div>
    );
}

export default Profile;
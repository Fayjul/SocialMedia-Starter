import React from 'react';
import PostSide from '../../components/PostSide/PostSide.jsx';
import ProfileCard from '../../components/ProfileCard/ProfileCard.jsx';
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft.jsx';
import RightSide from '../../components/RightSide/RightSide.jsx';
import './Profile.css';
const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft />

      <div className="Profile-center">
        <ProfileCard />
        <PostSide />
      </div>

      <RightSide />
    </div>
  );
};

export default Profile;

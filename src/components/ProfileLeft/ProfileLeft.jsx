import React from 'react';
import FollowersCard from '../FollowersCard/FollowersCard.jsx';
import InfoCard from '../InfoCard/InfoCard.jsx';
import LogoSearch from '../LogoSearch/LogoSearch.jsx';
const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileLeft;

import React from 'react';
import Logo from '../../img/logo.png';
import UilSearch from '@iconscout/react-unicons/icons/uil-search';
import './LogoSearch.css';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt=""></img>
      <div className="Search">
        <input type="text" placeholder="Search by paper Name"></input>
        <div className="s-icon">
          <UilSearch></UilSearch>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;

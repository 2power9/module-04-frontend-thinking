import React from 'react';
import Body from '../body-component/Body';
import Sidebar from '../sidebar-component/Sidebar';
import Footer from '../footer-component/Footer';
import "./Player.css";

function Player({ spotify }) {
  return (
	<div className='player'>
    
    <div className='player-body'>
    <Sidebar/>
      <Body spotify={ spotify }/>
    </div>
    
    <Footer/>
  </div>
  );
}

export default Player
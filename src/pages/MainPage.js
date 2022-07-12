import React from 'react';
import Body from '../components/Body';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import "./MainPage.css";

function MainPage({ spotify }) {
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

export default MainPage;
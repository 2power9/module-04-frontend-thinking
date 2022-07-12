import React from 'react';
import { Sidebar, Body, Footer } from "../../components";
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
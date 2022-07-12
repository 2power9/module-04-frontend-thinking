import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

import SidebarOption from '../SidebarOption/SidebarOption';
import './Sidebar.css';
import { useDataLayerValue } from '../../helper/dataLayer';
import sideBarLogo from "../../assets/images/white-spotify-with-text.png";

function Sidebar() {
  const [ { playlists }, dispatch] = useDataLayerValue();
 
  return (
	<div className="sidebar">
    <img  className='sidebar-logo' src={sideBarLogo} alt=""/>
    <SidebarOption Icon={HomeIcon} title="Home"/>
    <SidebarOption Icon={SearchIcon} title="Search"/>
    <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>

    <br/>
    <strong className="sidebar-title">PLAYLISTS</strong>
    <hr/>


    { playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
    ))}

  </div>
  );
}

export default Sidebar;

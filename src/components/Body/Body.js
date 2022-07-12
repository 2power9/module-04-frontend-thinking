import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import React from 'react';
import { useDataLayerValue } from '../../helper';
import Header from '../Header/Header';
import Track from '../Track/Track';
import './Body.css';

function Body({ spotify }) {
  const [{ staticPlaylist }] = useDataLayerValue();

  function getFirstImage(playlist) {
    if (!playlist || playlist.images.length <= 0) {
      return "No playlist to show";
    }
    return staticPlaylist?.images[0].url;
  }

  function getName(playlist) {
    return playlist ? playlist.name : "NaN";
  }

  function  getDescription(playlist) {
    return playlist ? playlist.description : "NaN";
  }

  function getItems(playlist) {
    if (!playlist?.tracks || playlist.tracks.items.length <= 0) {
      return [];
    }
    return playlist.tracks.items;
  }

  function showItems(playlist) {

    return (getItems(playlist).map( item => {
      return(
        <Track track={item.track}/>
      );
    }));
  }

return (
  <div className="body">
    <Header/>

    <div className="body-content">
      <img src={getFirstImage(staticPlaylist)} alt=""/>
      <div className="body-text-content">
        <strong>PLAYLIST</strong>
        <h2>{getName(staticPlaylist)}</h2>
        <p>{getDescription(staticPlaylist)}</p>
      </div>
      <div className="body-tracks">
        <div className="body-icons">
          <PlayCircleFilled className='body-shuffle'/>
          <Favorite fontSize='large'/>
          <MoreHoriz/>
        </div>

        {showItems(staticPlaylist)}
      </div>
    </div>
  </div>
  );
}

export default Body;
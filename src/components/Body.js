import { Favorite, MoreHoriz, PlayCircleFilled } from '@mui/icons-material';
import React from 'react';
import { useDataLayerValue } from '../helper/data-layer';
import Header from './Header';
import TrackComponent from './TrackComponent';
import './Body.css';

function Body({ spotify }) {
  const [ { staticPlaylist }, dispatch] = useDataLayerValue();

  return (
	<div className="body">
    <Header/>

    <div className="body-content">
      <img src={staticPlaylist?.images[0].url} alt=""/>
      <div className="body-text-content">
        <strong>PLAYLIST</strong>
        <h2>{staticPlaylist?.name}</h2>
        <p>{staticPlaylist?.description}</p>
      </div>
      <div className="body-tracks">
        <div className="body-icons">
          <PlayCircleFilled className='body-shuffle'/>
          <Favorite fontSize='large'/>
          <MoreHoriz/>
        </div>

        {staticPlaylist?.tracks.items.map( item => {
          return(
            <TrackComponent track={item.track}/>
          );
        })}

      </div>
    </div>
  </div>
  );
}

export default Body;
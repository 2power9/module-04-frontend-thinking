import React from 'react';
import './Track.css';

function Track({ track }) {
	console.log("track: " + track);
  return (
	<div className="track-component">
		<img className='track-album' src={track.album.images[0].url} alt=""/>
		<div className="track-content">
			<h1>{track.name}</h1>
			<p>
				{ track.artists.map((artist) => artist.name).join(', ') }
			</p>
		</div>
	</div>
  )
}

export default Track;
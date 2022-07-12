import React from 'react';
import './Track.css';

function Track({ track }) {
	function getFirstImage(track) {
		if (!track || !track.album || track.album.images.length <= 0) {
			return "";
		}
		return track.album.images[0].url;
	}

	function getName(track) {
		if (!track || !track.name) {
			return "NaN";
		}
		return track.name;
	}

	function getArtists(track) {
		if (!track || track.artists.length <= 0) {
			return [];
		}
		return track.artists;
	}

	function showArtists(artists) {
		return artists.map((artist) => artist.name).join(", ");
	}

  return (
	<div className="track-component">
		<img className='track-album' src={getFirstImage(track)} alt=""/>
		<div className="track-content">
			<h1>{getName(track)}</h1>
			<p>{showArtists(getArtists(track))}</p>
		</div>
	</div>
  )
}

export default Track;
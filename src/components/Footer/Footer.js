import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';

import './Footer.css';
import { Grid, Slider } from '@mui/material';
import { PlaylistPlay, VolumeDown } from '@mui/icons-material';
import { useDataLayerValue } from '../../helper';

function Footer({ spotify }) {
  const [{ staticTrack }] = useDataLayerValue();

	function getArtists(track) {
		if (!track || !staticTrack.artists || track.artists.length <= 0) {
			return [];
		}
		return track.artists;
	}

  return (
	<div className="footer">
		<div className='footer-left'>
			<img className='footer-album-logo' src={staticTrack?.album.images[0].url} alt=""/>
			<div className='footer-song-infomation'>
				<h4>{staticTrack?.name}</h4>
				<p>
					{ getArtists(staticTrack).map((artist) => artist?.name ?? '').join(', ') }
				</p>
			</div>
		</div>
		<div className='footer-center'>
			<ShuffleIcon className='footer-green'/>
			<SkipPreviousIcon className='footer-icon'/>
			<PlayCircleOutlineIcon fontSize="large" className='footer-icon'/>
			<SkipNextIcon className='footer-icon'/>
			<RepeatIcon className='footer-green'/>
		</div>
		<div className='footer-right'>
			<Grid container spacing={2}>
				<Grid item>
					<PlaylistPlay />
				</Grid>
				<Grid item>
					<VolumeDown/>
				</Grid>
				<Grid item xs>
					<Slider aria-labelledby="continuous-slider"/>
				</Grid>
        	</Grid>
		</div>
	</div>
  );
}

export default Footer;
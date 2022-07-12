import React from 'react';
import "./Login.css";
import { loginURL } from "../APIs/spotify";
import SpotifyLogo from "../media/white-spotify-with-text.png";

function Login() {
  return (
	<div className='login'>
      {/* spotify-clone logo */}
      <img src={SpotifyLogo} alt="" />
      {/* spotify-clone button login */}
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
	</div>
  )
}

export default Login
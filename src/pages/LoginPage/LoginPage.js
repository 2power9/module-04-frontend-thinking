import React from 'react';
import "./LoginPage.css";
import { loginURL } from "../../api/spotify";
import spotifyLogo from "../../assets/images/white-spotify-with-text.png";

function LoginPage() {
  return (
	<div className='login'>
      <img src={spotifyLogo} alt="" />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
	</div>
  )
}

export default LoginPage;
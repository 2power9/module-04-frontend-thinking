import React from 'react';
import "./Login.css";
import { loginURL } from "../spotify";

function Login() {
  return (
	<div className='login'>
      
      {/* spotify-clone logo */}
      <img src="./media/white-spotify-with-text.png" alt="" width="100px" />
      
      {/* spotify-clone button login */}
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>

	</div>
  )
}

export default Login
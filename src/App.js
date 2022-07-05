import React, { useEffect, useState } from "react";
import './App.css';
import Login from "./login-page/Login";
import Player from "./player-component/Player";
import { getTokenFromURL } from "./spotify";
import SpotifyWebAPI from "spotify-web-api-js";

const spotify = new SpotifyWebAPI();

function App() {
  const [token, setToken] = useState(null);

  // run code base on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const tempToken = hash.access_token;

    if (tempToken) {
      setToken(tempToken);
      spotify.setAccessToken(tempToken);
      spotify.getMe().then(user => {
        console.log("User: ", user);
      })
    }

    console.log("Token:", token);
  }, []);

  return (
    <div className="app">
      {
        token ? (
          <Player/>
        ) : (
          <Login/>
        )
      }
    </div>

  );
}

export default App;

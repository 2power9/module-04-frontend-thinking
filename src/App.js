import React, { useEffect } from "react";
import "./App.css";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import { getTokenFromURL } from "./APIs/spotify";
import SpotifyWebAPI from "spotify-web-api-js";
import { useDataLayerValue } from "./helper/data-layer";

const spotify = new SpotifyWebAPI();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // run code base on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const tempToken = hash.access_token;

    // yo, why temp token, we have token at home, do em
    if (tempToken) {
      dispatch({
        type: "SET_TOKEN",
        token: tempToken,
      });

      spotify.setAccessToken(tempToken);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1DX0F4i7Q9pshJ").then( staticPlaylist => {
        dispatch({
          type: "SET_STATIC_PLAYLIST",
          staticPlaylist: staticPlaylist
        });
      });

      spotify.getTrack("2gskz5lYcLiRHP7Cj6ds4k").then(staticTrack => {
        dispatch({
          type: "SET_STATIC_TRACK",
          staticTrack: staticTrack
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      {token ? <MainPage spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;

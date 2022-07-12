import React, { useEffect } from "react";
import { getTokenFromURL } from "./api/spotify";
import SpotifyWebAPI from "spotify-web-api-js";
import { useDataLayerValue, API_OPTIONS } from "./helper";
import { LoginPage, MainPage } from "./pages";
import "./App.css";

const spotify = new SpotifyWebAPI();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // run code base on a given condition
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const tempToken = hash.access_token;

    if (tempToken) {
      dispatch({
        type: API_OPTIONS.SET_TOKEN,
        token: tempToken,
      });

      spotify.setAccessToken(tempToken);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: API_OPTIONS.SET_USER,
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: API_OPTIONS.SET_PLAYLISTS,
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1DX0F4i7Q9pshJ").then( staticPlaylist => {
        dispatch({
          type: API_OPTIONS.SET_STATIC_PLAYLIST,
          staticPlaylist: staticPlaylist
        });
      });

      spotify.getTrack("2gskz5lYcLiRHP7Cj6ds4k").then(staticTrack => {
        dispatch({
          type: API_OPTIONS.SET_STATIC_TRACK,
          staticTrack: staticTrack
        });
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="app">
      {token ? <MainPage spotify={spotify} /> : <LoginPage />}
    </div>
  );
}

export default App;

import React from "react";
import { render } from '@testing-library/react';
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "../../helper/dataLayer";
import Track from "./Track";

const spotify = new SpotifyWebApi();
const staticTrackTest = spotify.getTrack("0AVD41MdtZCInPGFlJiEXr");

test("Track render without crashing", () => {
  render(
    <DataLayer>
      <Track track = {staticTrackTest}/>
    </DataLayer>);
});

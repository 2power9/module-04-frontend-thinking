import React from "react";
import { render } from '@testing-library/react';
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "../../helper/dataLayer";
import Header from "./Header";

const spotify = new SpotifyWebApi();

test("Header render without crashing", () => {
  render(
    <DataLayer>
      <Header spotify={spotify}/>
    </DataLayer>);
});

import React from "react";
import { render } from '@testing-library/react';
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "../../helper/dataLayer";
import Body from "./Body";

const spotify = new SpotifyWebApi();

test("Body render without crashing", () => {

  render(
    <DataLayer>
      <Body spotify={spotify}/>
    </DataLayer>);
});

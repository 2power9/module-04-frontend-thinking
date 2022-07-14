import React from "react";
import { render } from '@testing-library/react';
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "../../helper/dataLayer";
import Sidebar from "./Sidebar";

const spotify = new SpotifyWebApi();

test("Sidebar render without crashing", () => {

  render(
    <DataLayer>
      <Sidebar spotify={spotify}/>
    </DataLayer>);
});

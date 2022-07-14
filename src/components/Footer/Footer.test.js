import React from "react";
import { render } from '@testing-library/react';
import Footer from "./Footer";
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "../../helper/dataLayer";

const spotify = new SpotifyWebApi();

test("Footer render without crashing", () => {

  render(
    <DataLayer>
      <Footer spotify={spotify}/>
    </DataLayer>);
});

import React from "react";
import { render } from '@testing-library/react';
import SpotifyWebApi from "spotify-web-api-js";
import { DataLayer } from "../../helper/dataLayer";
import SidebarOption from "./SidebarOption";

const spotify = new SpotifyWebApi();

test("SidebarOption render without crashing", () => {

  render(
    <DataLayer>
      <SidebarOption spotify={spotify}/>
    </DataLayer>);
});

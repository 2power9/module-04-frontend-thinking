import React from "react";
import { render } from '@testing-library/react';
import MainPage from "./MainPage";
import { DataLayer } from "../../helper/dataLayer";

test("MainPage render without crashing", () => {
  render(
    <DataLayer>
      <MainPage/>
    </DataLayer>
  );
});

import React from "react";
import { render } from '@testing-library/react';
import LoginPage  from "./LoginPage";

test("LoginPage render without crashing", () => {
  render(<LoginPage/>);
});
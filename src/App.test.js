import { render } from '@testing-library/react';
import App from './App';
import { DataLayer } from "./helper/dataLayer";

test('App render', () => {
  render(
    <DataLayer>
      <App/>
    </DataLayer>
  );
});

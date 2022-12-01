import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FathomDashboardWidget } from '../src/components';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <FathomDashboardWidget siteID="HIFDIEQG" domain="wrux.com" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

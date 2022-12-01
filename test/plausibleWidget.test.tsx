import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PlausibleDashboardWidget } from '../src/components';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <PlausibleDashboardWidget auth="test" domain="test" />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Frame } from '../src/components';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Frame />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { Capture } from '../src/index';

describe('it', () => {
  it('This liberary renders without crashing', () => {
    const div = document.createElement('div');
    const App=()=>{
      return (
        <Capture>
        <h1>Hello World</h1>
      </Capture>
      )
    }
    ReactDOM.createRoot(div).render(<App/>)
    ReactDOM.createRoot(div).unmount()
  });
});

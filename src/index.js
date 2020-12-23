import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { StateProvider } from './component/StateProvider/StateProvider';
import reducer, { inititalState } from './component/reducer/reducer';


ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={inititalState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


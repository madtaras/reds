import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { tick } from '../actions/';
import App from './App';

// Set up store
import reducer from '../reducers/index';

const store = createStore(reducer);

// Set up interval for changing words on a screen
let interval = null;
let speed = 400;
store.subscribe(() => {
  if (store.getState().isReading && interval === null) {
    interval = setInterval(() => {
      store.dispatch(tick());
    }, 60000 / store.getState().speed);
  } else if (speed !== store.getState().speed && store.getState().isReading && interval !== null) {
    clearInterval(interval);
    speed = store.getState().speed;
    interval = setInterval(() => {
      store.dispatch(tick());
    }, 60000 / store.getState().speed);
  } else if (!store.getState().isReading && interval !== null) {
    clearInterval(interval);
    interval = null;
  }
});

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

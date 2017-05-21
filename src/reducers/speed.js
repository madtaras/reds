import { createReducer } from 'redux-act';
import {
  increaseSpeed,
  decreaseSpeed,
} from '../actions/';

const speed = createReducer({
  [increaseSpeed]: state => state + 50,
  [decreaseSpeed]: state => state - 50,
}, 400);

export default speed;

import { createReducer } from 'redux-act';
import { textChanged } from '../actions/';

const rawText = createReducer({
  [textChanged]: (state, text) => text,
}, '');

export default rawText;

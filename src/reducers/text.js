import { createReducer } from 'redux-act';
import {
  textChanged,
  tick,
} from '../actions/';
import parser from '../helpers/parser/';

const defaultState = {
  past: [],
  current: '',
  future: [],
};

const updateWord = state => ({
  past: [...state.past, state.current],
  current: state.future[0],
  future: state.future.slice(1),
});

const proccessRawText = (state, rawText) => {
  const parsedText = parser(rawText);

  return {
    past: [],
    current: parsedText[0],
    future: parsedText.slice(1),
  };
};

const text = createReducer({
  [textChanged]: proccessRawText,
  [tick]: updateWord,
}, defaultState);

export default text;

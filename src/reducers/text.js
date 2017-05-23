import { createReducer } from 'redux-act';
import {
  textChanged,
  tick,
  textSelected,
} from '../actions/';
import parser from '../helpers/parser/';

export const calculateProgress = (state) => {
  const textState = state.text;

  if (!textState.past.length) return 0;
  if (!textState.future.length) return 100;

  return ((textState.past.length + 1) /
    (textState.future.length + textState.past.length + 1)) * 100;
};

const defaultState = {
  past: [],
  current: '',
  future: [],
};

const updateWord = (state) => {
  if (!state.future.length) return state;

  return {
    past: [...state.past, state.current],
    current: state.future[0],
    future: state.future.slice(1),
  };
};

const proccessRawText = (state, rawText) => {
  const parsedText = parser.advancedParser(rawText);

  return {
    past: [],
    current: parsedText[0],
    future: parsedText.slice(1),
  };
};

let lastSelected = '';
const translate = (state, selectedText) => {
  if (selectedText !== lastSelected) {
    fetch('http://www.transltr.org/api/translate', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: selectedText,
        to: 'uk',
        from: 'en',
      }),
    }).then(response => response.json())
      .then((responseJson) => {
        alert(`${selectedText} == ${responseJson.translationText}`);
      })
      .catch((error) => {
        console.dir(error);
      });
  }
  return state;
};

const text = createReducer({
  [textChanged]: proccessRawText,
  [tick]: updateWord,
  [textSelected]: translate,
}, defaultState);

export default text;

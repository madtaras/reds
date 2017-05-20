import { createAction } from 'redux-act';

export const textChanged = createAction('Text changed');
export const textSelected = createAction('Text selected');

export const play = createAction('Start reading');
export const pause = createAction('Pause reading');
export const tick = createAction('Change the word in spritz-box');

export const increaseSpeed = createAction('Increase reading speed');
export const decreaseSpeed = createAction('Decrease speed');

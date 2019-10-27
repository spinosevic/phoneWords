import {GET_WORDS} from './constants';
import {ADD_DIGIT} from './constants';
import {CLEAR} from './constants';
import {CANCEL} from './constants';

export const postDigits = (digits) => dispatch => {
  return fetch('/words',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({string: digits})
  })
  .then(resp=>resp.json())
  .then(words => dispatch({type: GET_WORDS, payload: words}))
}

export const addDigitToState = (digit) => dispatch => {
  dispatch({type: ADD_DIGIT, payload: digit})
}
export const clearLastDigit = (digit) => dispatch => {
  dispatch({type: CLEAR})
}
export const cancelDigits = (digit) => dispatch => {
  dispatch({type: CANCEL})
}

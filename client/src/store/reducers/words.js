import {GET_WORDS} from '../actions/constants'
import {ADD_DIGIT} from '../actions/constants';
import {CANCEL} from '../actions/constants';
import {CLEAR} from '../actions/constants';



const initialState = {
  words: '',
  digits: ''
}

export default function (state = initialState, action){
  switch(action.type) {
    case GET_WORDS: {
      return {...state, words: action.payload}
    }
    case ADD_DIGIT: {
      return {...state, digits: state.digits+action.payload}
    }
    case CANCEL: {
      return {...state, digits: ''}
    }
    case CLEAR: {
      return {...state, digits: state.digits.substring(0, state.digits.length - 1)}
    }
    default: return state
  }
}

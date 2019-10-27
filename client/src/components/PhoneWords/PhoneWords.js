import React, { Component } from 'react';
import PropTypes from 'prop-types'
import DigitButton from './DigitButton.js'
import Words from './Words.js'

import {connect } from 'react-redux';
import {postDigits, addDigitToState, clearLastDigit, cancelDigits} from '../../store/actions/words'
import './phonewords.scss';

class PhoneWords extends Component {



  static propTypes = {
    postDigits: PropTypes.func.isRequired,
    addDigitToState: PropTypes.func.isRequired,
    clearLastDigit: PropTypes.func.isRequired,
    cancelDigits: PropTypes.func.isRequired,
  }

  handleFindWords = async() => {
    await this.props.postDigits(this.props.digits)
    window.scrollTo(0,document.body.scrollHeight);

  }



  render() {
    const keypad =[{number: '1', letters: '', clickAction: this.props.addDigitToState},{number: '2', letters: 'ABC', clickAction: this.props.addDigitToState},{number: '3', letters: 'DEF', clickAction: this.props.addDigitToState},{number: '4', letters: 'GHI', clickAction: this.props.addDigitToState},{number: '5', letters: 'JKL', clickAction: this.props.addDigitToState},{number: '6', letters: 'MNO', clickAction: this.props.addDigitToState},{number: '7', letters: 'PQRS', clickAction: this.props.addDigitToState},{number: '8', letters: 'TUV', clickAction: this.props.addDigitToState},{number: '9', letters: 'WXYZ'},{number: 'C', letters: '', clickAction: this.props.clearLastDigit},{number: '0', letters: '', clickAction: this.props.addDigitToState},{number: 'R', letters: '', clickAction: this.props.cancelDigits} ]

    return (
      <div className = "phoneWords">
        <div className='search-div'>
          <button className='search-btn' onClick={()=>this.handleFindWords()}> Find Words </button>
        </div>
        <div className ='gridContainer'>
          <div className="display">
            {this.props.digits}
          </div>
          <div className="grid">
          {keypad.map((phoneButton, i) =><div key={i} className="phoneButton"><DigitButton number={phoneButton.number} letters={phoneButton.letters} clickAction={phoneButton.clickAction} /> </div>)}
          </div>
        </div>
        {this.props.words ? <Words words={this.props.words}/> :
          null
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  words: state.phoneWords.words,
  digits: state.phoneWords.digits

})

const dispatchToProps = (dispatch) => ({
   postDigits: (digits) => dispatch(postDigits(digits)),
   addDigitToState: (digit) => dispatch(addDigitToState(digit)),
   clearLastDigit: () => dispatch(clearLastDigit()),
   cancelDigits: () => dispatch(cancelDigits())

})

export default connect(mapStateToProps, dispatchToProps)(PhoneWords);

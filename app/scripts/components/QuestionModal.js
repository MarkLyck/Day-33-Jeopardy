import React from 'react';

import $ from 'jquery';
import store from '../store';
import session from '../models/session'

const QuestionModal = React.createClass({
  submitAnswer: function(e){
    e.preventDefault();
    let userAnswer = this.refs.useranswer.value.toLowerCase();
    let jeopardyAnswer = this.props.clue.answer.toLowerCase();

    if (userAnswer === this.props.clue.answer) {
      console.log('you got the answer right!');
      store.score.correctAnswer(this.props.clue);

      // If they answer correct, update their session with the value.
      // Get the current value and save it to a variable
      let score = session.get('score')
      // Update that variable with the value of the clue
      score += this.props.clue.value
      // Set the value of score in our session to the updated amount
      session.set('score', score)
      // setting a value, doesn't automatically cause an update. So we have to manually trigger it.
      session.trigger('change')
    } else {
      console.log('wrong answer...');
      store.score.wrongAnswer(this.props.clue);
    }
    console.log('jeopardyAnswer ', jeopardyAnswer);
    console.log('userAnswer ', userAnswer);
    // console.log('this', this);
    this.props.hideModal();
    this.props.removePreview(this);

    // this.props.removePreview(this.props.clue);
  },
  render: function(){
    console.log('ANSWER ', this.props.clue.answer);
    return (
      <div className="modal-container">
        <form className="modal" onSubmit={this.submitAnswer}>
          <h2>{this.props.clue.question}</h2>
          <input className="input-answer" type="text" placeholder="type in your answer..." ref="useranswer"/>
          <input className="submit-btn" type="submit" value="submit answer" onClick={this.submitAnswer} />
          <input className="pass-btn" type="button" value="pass" onClick={this.submitAnswer} />
        </form>
      </div>
    );
  }
});

export default QuestionModal;

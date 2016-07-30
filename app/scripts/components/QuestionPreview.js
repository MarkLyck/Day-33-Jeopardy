import React from 'react';

import store from '../store';
import QuestionModal from './QuestionModal';

const QuestionPreview = React.createClass({
  getInitialState: function() {
    // Setting the initial state to false:
    return {wasViewed: false}
  },
  runShowModal: function() {
    this.props.showModal(this.props.clue);
    // Once you clicked the question, we change the wasViewed state to true.
    this.setState({wasViewed: true})
  },
  render: function(){
    // If the item has already been clicked before we return an empty with no click event <li>
    if (this.state.wasViewed) {
      return (
        <li className="q-previews" ref="questionPreview"></li>
      );
    // Else if the item hasn't been viewed, we return an item with a click event and a $ value.
    } else {
      return (
        <li className="q-previews" onClick={this.runShowModal} ref="questionPreview">${this.props.clue.value}</li>
      );
    }
    //ask if the clue has been viewed and return the right li based on that
  }
});

export default QuestionPreview;

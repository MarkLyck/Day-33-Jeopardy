import React from 'react';
import Backbone from 'backbone';
import $ from 'jquery';

import CategoryColumn from './CategoryColumn';
import store from '../store';

import session from '../models/session'

const Gamebaord = React.createClass({
  getInitialState: function(){
    return {
      categories: store.categories.toJSON(),
      score: 0
    }
  },
  componentDidMount: function(){
      //make this a custom collection fucntion on coll
    // _(6).times(function(){
    //   store.categories.add({})
    // });
    store.categories.on('update change', () => {
      this.setState({categories: store.categories.toJSON()});
    });

    store.categories.makeNewGame();

    // When the session model changes, we change the state with the updated score.
    session.on('change', () => {
      console.log('SESSION CHANGED');
      this.setState({score: session.get('score')})
    })
    // store.categories.each((categoryModel) => {
    //   categoryModel.getCategory(Math.floor(Math.random() * 18000));
    // });
  },
  render: function(){
    let categoriesArr = this.state.categories.map((catObj, i, arr) => {
      let index=i;
      // console.log(catObj.category);
      // console.log(catObj.category.clues);
      return <CategoryColumn key={i} title={catObj.category.title} clues={catObj.category.clues} />;
      });
    return (
      <div id="game-container">
        <div className="gameboard">{categoriesArr}</div>
        <footer>${this.state.score}</footer>
      </div>
    );
  }
});

export default Gamebaord;

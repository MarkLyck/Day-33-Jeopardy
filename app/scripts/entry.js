import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Gameboard from './components/Gameboard';

const router = (
 <Router history={hashHistory}>
    <Route path="/" component={Gameboard}/>
  </Router>
);

ReactDOM.render(router, document.querySelector('#App'));
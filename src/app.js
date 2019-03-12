import React from 'react';
import ReactDom from 'react-dom';
import Header from './headerLinks';
import StudentList from './studentList';
import StudentDetails from './studentDetails';
import './css/style.css';
import { BrowserRouter as Router, Route, browserHistory } from 'react-router-dom';

ReactDom.render((
  <Router history={browserHistory}>
    <div>
      <Route exact path="/" component={Header} />
      <Route exact path="/list" component={StudentList} />
      <Route exact path="/details/:id" component={StudentDetails} />
    </div>
  </Router>
), document.getElementById('app'));

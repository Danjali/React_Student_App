import React from 'react';
import StudentList from './studentList';
import Data from './static/result.json';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      studentData: Data.results
    };
    this.getStudentList = this.getStudentList.bind(this);
  }

  render() {
    let { studentData } = this.state;
    return (
      <div>
        <div className="mainNavigation">
          <Link to='/'>Home</Link>
          <Link to='/list'>Student List</Link>
        </div>
        <h4> Click on Student List Link to see the result </h4>
        <div>
          <StudentList studentListItems={studentData} />
        </div>
      </div>
    );
  }
}

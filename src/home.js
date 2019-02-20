import React from 'react';
import StudentList from './studentList';
import Data from './static/result.json';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      homePage: true,
      studentData: Data.results
    };
    this.homePageDetails = this.homePageDetails.bind(this);
    this.getStudentList = this.getStudentList.bind(this);
  }

  homePageDetails() {
    this.setState({
      homePage: true
    });
  }

  getStudentList(result) {
    this.setState({
      homePage: false,
      studentData: result
    });
  }

  render() {
    let { studentData } = this.state;
    return (
      <div>
        <div>
          <a onClick={this.homePageDetails}>Students Result App</a>
          { this.state.homePage &&
        <h4> Click on Student List Link to see the result </h4>
          }
        </div>
        <div>
          <StudentList homeState={this.state.homePage} studentListItems={studentData} getStudentList={this.getStudentList}/>
        </div>
      </div>
    );
  }
}

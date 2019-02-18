import React from 'react';
import StudentList from './studentList';
import StudentDetails from './studentDetails';
import Data from './static/result.json';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      homePage: true,
      studentDetailsPage: false,
      studentData: Data.results
    }
    this.homePageDeatils = this.homePageDetails.bind(this);
    this.getStudentList = this.getStudentList.bind(this);
    this.getStudentDetails = this.getStudentDetails.bind(this);
  }

  homePageDetails() {
    let docTemplate = <h4> Click on Student Link to see the result </h4>
    return docTemplate;
  }

  getStudentList(result) {
    this.setState({
      homePage: false,
      studentDetailsPage: false,
      studentData: result
    })
  }

  getStudentDetails(id, selectedStudentResult) {
    let result = selectedStudentResult.filter((item,key) => {
      if(key === id){
        return item;
      }
    })
    this.setState({
      homePage: false,
      studentDetailsPage: true,
      studentData: result
    })
  }

  render() {
    let { studentData } = this.state;
    return (
      <div>
        <a onClick={this.homePageDetails}>Students Result App</a>
        <div>
          {this.state.homePage && this.homePageDetails()}
        </div>
          <div>
          <StudentList studentListItems={studentData} getStudentList={this.getStudentList} getStudentDetails={this.getStudentDetails}/>
          </div>
        {this.state.studentDetailsPage &&
        <div>
          <StudentDetails selectedStudent={studentData}/>
        </div>
        }
      </div>
    )
  }

}

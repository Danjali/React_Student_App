import React from 'react';
import StudentDetails from './studentDetails';

export default class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
      studentListState: false,
      studentDetails: false,
      data: []
    };
    this.getStudentList = this.getStudentList.bind(this);
  }

  getStudentList() {
    let result = this.props.studentListItems;
    result.forEach((item) => {
      item.totalMarks = (item.marks.english + item.marks.hindi + item.marks.mathematics);
      item.percentage = (( item.totalMarks / 300) * 100).toFixed(2)+'%';
    });
    this.setState({
      studentListState: true,
      studentDetails: false,
      data: result
    });
    this.props.getStudentList(result);
  }

  getStudentDetails(id) {
    let result = this.props.studentListItems;
    let selectedStudentResult = result.filter((item,key) => {
      if(key === id){
        return item;
      }
    });
    this.setState({
      studentListState: false,
      studentDetails: true,
      data: selectedStudentResult
    });
  }

  render() {
    let { data } = this.state;
    let { homeState } = this.props;
    return (
      <div>
        <a onClick={this.getStudentList}>Student List</a>
        <div>
          { this.state.studentListState && !homeState &&
        <div><h4>Click on First Name to check the detailed result</h4>
          <div className="Table">
            <div className="CellHeadings">First Name</div>
            <div className="CellHeadings">Last Name</div>
            <div className="CellHeadings">Percentage</div>
            {
              data.map((item,index) => {
                return (
                  <div className="Row" key={index}>
                    <div className="Cell" onClick={this.getStudentDetails.bind(this,index)}>{item.firstName}</div>
                    <div className="Cell">{item.lastName}</div>
                    <div className="Cell">{item.percentage}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
          }
        </div>
        { this.state.studentDetails && !homeState &&
        <div>
          <StudentDetails selectedStudent={data}/>
        </div>
        }
      </div>
    );
  }
}

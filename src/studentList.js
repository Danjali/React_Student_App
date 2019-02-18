import React from 'react';

export default class StudentList extends React.Component {
  constructor() {
    super();
    this.state = {
      studentListState: false,
      data: []
    }
    this.getStudentList = this.getStudentList.bind(this);
  }

  getStudentList() {
    let result = this.props.studentListItems;
    result.forEach((item) => {
      item.totalMarks = (item.marks.english + item.marks.hindi + item.marks.mathematics);
      item.percentage = (( item.totalMarks / 300) * 100).toFixed(2)+'%';
    })
    this.setState({
        studentListState: true,
        data: result
    })
    // this.props.getStudentList(result);
  }

  getStudentDetails(id) {
    let result = this.props.studentListItems;
    // let selectedStudentResult = result.filter((item,key) => {
    //   if(key === id){
    //     return item;
    //   }
    // })
    this.setState({
        studentListState: false,
        data: result
    })
    this.props.getStudentDetails(id, result);
  }

  render() {
    let { data } = this.state;
    return (
      <div>
        <a onClick={this.getStudentList}>Student List</a>
      <div>
      { this.state.studentListState &&
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
              )
            })
          }
        </div>
      }
      </div>
      </div>
    )
  }
}

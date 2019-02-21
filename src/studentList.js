import React from 'react';
import StudentDetails from './studentDetails';
import ItemSearch from './itemSearch';

export default class StudentList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      studentListState: false,
      studentDetails: false,
      data: props.studentListItems,
      searchData: []
    };
    this.getStudentResult = this.getStudentResult.bind(this);
    this.searchItem = this.searchItem.bind(this);
  }

  getStudentResult() {
    let { data } = this.state;
    data.forEach((item) => {
      item.totalMarks = (item.marks.english + item.marks.hindi + item.marks.mathematics);
      item.percentage = (( item.totalMarks / 300) * 100).toFixed(2);
    });
    this.setState({
      studentListState: true,
      studentDetails: false,
      searchData: data
    });
    this.props.getStudentList(data);
  }

  getStudentDetails(id) {
    let { data } = this.state;
    let selectedStudentResult = data.filter((item,key) =>  key === id);
    this.setState({
      studentListState: false,
      studentDetails: true,
      searchData: selectedStudentResult
    });
  }

  searchItem(searchValue) {
    const result = [...this.state.data].filter(item => {
      return (item.firstName.toLowerCase().search(searchValue.toLowerCase()) > -1 || item.lastName.toLowerCase().search(searchValue.toLowerCase()) > -1);
    });
    this.setState({
      studentListState: true,
      studentDetails: false,
      searchData: result
    });
  }

  render() {
    let { searchData } = this.state,
      { homeState } = this.props;
    return (
      <div>
        <a onClick={this.getStudentResult}>Student List</a>
        <div>
          { this.state.studentListState && !homeState &&
        <div>
          <ItemSearch searchItem={this.searchItem}/>
          <h4>Click on First Name to check the detailed result</h4>
          { searchData.length > 0 ?
            <div className="Table">
              <div className="CellHeadings">First Name</div>
              <div className="CellHeadings">Last Name</div>
              <div className="CellHeadings">Percentage</div>
              {
                searchData.map((item,index) => {
                  return (
                    <div className={ item.percentage < 35 ? 'FailedRow' : 'Row' } key={index} >
                      <span className="Cell" onClick={this.getStudentDetails.bind(this,index)}>{item.firstName}</span>
                      <div className="Cell">{item.lastName}</div>
                      <div className="Cell">{item.percentage+'%'}</div>
                    </div>
                  );
                })
              }
            </div>
            :<p>No Data</p>
          }
        </div>
          }
        </div>
        { this.state.studentDetails && !homeState &&
        <div>
          <StudentDetails selectedStudent={searchData}/>
        </div>
        }
      </div>
    );
  }
}

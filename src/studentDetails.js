import React from 'react';

export default class StudentDetails extends React.Component {

  render(){
    let { selectedStudent }  = this.props;
    return (
      <div>
        <a>Student Details</a>
        <div>
          <h3>Name: {selectedStudent[0].firstName + ' ' +selectedStudent[0].lastName}</h3>
          <div className="Table">
            <div className="CellHeadings">English</div>
            <div className="CellHeadings">Hindi</div>
            <div className="CellHeadings">Mathematics</div>
            <div className="CellHeadings">Total</div>
            <div className="CellHeadings">Percentage</div>
            {
              selectedStudent.map((item, index) => {
                return (
                  <div className="Row" key={index}>
                    <div className="Cell">{item.marks.english}</div>
                    <div className="Cell">{item.marks.hindi}</div>
                    <div className="Cell">{item.marks.mathematics}</div>
                    <div className="Cell">{item.totalMarks}</div>
                    <div className="Cell">{item.percentage}</div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

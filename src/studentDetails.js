import React from 'react';
const StudentDetails = (props) => {
  let { selectedStudent } = props;
  return (
    <div>
      <a>Student Details</a>
      <div>
        <h4>{`Name: ${selectedStudent[0].firstName} ${selectedStudent[0].lastName}`}</h4>
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
                  <div className="Cell">{item.percentage+'%'}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
};
export default StudentDetails;

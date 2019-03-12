import React from 'react';
import { Link } from 'react-router-dom';
import results from './static/result';

const StudentDetails = (props) => {
  let selectedId = props.match.params.id;
  let selectedStudent = results.filter((item, key) => {
    return key == selectedId;
  });

  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/list'>Student List</Link>
      {
        selectedStudent.map((item, index) => {
          return (
            <div key={index}>
              <h4>{`Name: ${item.firstName} ${item.lastName}`}</h4>
              <div className="Table">
                <div className="CellHeadings">English</div>
                <div className="CellHeadings">Hindi</div>
                <div className="CellHeadings">Mathematics</div>
                <div className="CellHeadings">Total</div>
                <div className="CellHeadings">Percentage</div>
                <div className="Row">
                  <div className="Cell">{item.marks.english}</div>
                  <div className="Cell">{item.marks.hindi}</div>
                  <div className="Cell">{item.marks.mathematics}</div>
                  <div className="Cell">{item.totalMarks}</div>
                  <div className="Cell">{item.percentage+'%'}</div>
                </div>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};
export default StudentDetails;

import React from 'react';
import { Link } from 'react-router-dom'
import results from './static/result';
import ItemSearch from './itemSearch';

export default class StudentList extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: results,
      searchData: results
    };
    this.searchItem = this.searchItem.bind(this);
  }

  searchItem(searchValue) {
    const result = [...this.state.data].filter(item => {
      return (item.firstName.toLowerCase().search(searchValue.toLowerCase()) > -1 || item.lastName.toLowerCase().search(searchValue.toLowerCase()) > -1);
    });
    this.setState({
      searchData: result
    });
  }

  render() {
    let { data, searchData } = this.state;
    searchData.forEach((item) => {
      item.totalMarks = (item.marks.english + item.marks.hindi + item.marks.mathematics);
      item.percentage = (( item.totalMarks / 300) * 100).toFixed(2);
    });
    return (
      <div>
        <Link to='/'>Home</Link>
        <Link>Student List</Link>
        <ItemSearch searchItem={this.searchItem}/>
        <h4>Click on First Name to check the detailed result</h4>
        { searchData.length > 0 ?
          <div className="Table">
            <div className="CellHeadings">First Name</div>
            <div className="CellHeadings">Last Name</div>
            <div className="CellHeadings">Percentage</div>
            {
              searchData.map((item, index) => {
                return (
                  <div className={ item.percentage < 35 ? 'FailedRow' : 'Row' } key={index} >
                    <div className="Cell"><Link to={`/details/${index}`}>{item.firstName}</Link></div>
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
    );
  }
}

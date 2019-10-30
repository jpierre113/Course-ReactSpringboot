import React, {Component} from 'react';

class Course extends Component{
  render(){
    return (
      <div>
          <p>{this.props.name}</p>
          <p>{this.props.code}</p>
      </div>
        )
    }
  }

export default Course;

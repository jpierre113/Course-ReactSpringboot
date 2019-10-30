import React, { Component } from 'react';
import './App.css';

// import Course from './components/Course';
// import CourseNewForm from './components/CourseNewForm';
import CourseList from './components/CourseList';

class App extends Component {

  constructor(props){
    super(props);

    }
    async componentDidMount() {
        try {
            const response = await fetch('/course/list')
            this.setState({
            courses: response.data,
             })
        } catch (error) {
            console.log('Error retrieving courses!')
            console.log(error)
        }
    }

  render() {
    return (
      <div>
        <CourseList/>
      </div>
    )
  }

}

export default App;

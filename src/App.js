import React from 'react';
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';
import './App.css';

class App extends React.Component {
  state = {
    courses : [
      {name: "HTML"},
      {name: "CSS"},
      {name: "JavaScript"},
    ],
    current : ''
  }
  updateCourseList = (e) => {
    this.setState(
      {
        current: e.target.value,
      }
    )
  }

  addCourse = (e) => {
    e.preventDefault();
    let {current} = this.state
    let {courses} = this.state
    if (e.target.name.value === "") {
      return false
    } else {
      courses.push({name: current});
      this.setState({
        courses,
        current: ""
      })
    }
  }

  deleteCourse = (index) => {
    // console.log(index)
    let {courses} = this.state
    courses.splice(index, 1)
    this.setState({
      courses
    })
  }

  editCourse = (index, value) => {
    let {courses} = this.state;
    let  course = courses[index];
    course["name"] = value;
    this.setState({
      courses
    })
  }

  render () {
    const {courses} = this.state;
    let Length = courses.length ;
    const TheCourseList = Length ? ( 
      courses.map( (course, index) => {
        return (
          <CourseList course={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
        )
      } )
    )  : (
      <p>There is no Courses to show .. Creat one!</p>
    )
    return (
    <div className="App">
      <h2>Crud Application</h2>
      <div className='container'>
        <CourseForm current={this.state.current} updateCourseList={this.updateCourseList} addCourse={this.addCourse} />
        <ul>
          {TheCourseList}
        </ul>
      </div>
    </div>
  );
  }
}

export default App;

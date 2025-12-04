import React from 'react';

class Student extends React.Component {
  render() {
    const { name, age, course } = this.props;
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Course: {course}</p>
      </div>
    );
  }
}

export default Student;

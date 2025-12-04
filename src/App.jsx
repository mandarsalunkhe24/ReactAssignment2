import React from 'react';
import Student from './Student';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Student Information</h1>
        <Student name="John Doe" age={20} course="Computer Science" />
        <Student name="Jane Smith" age={19} course="Mathematics" />
        <Student name="Bob Johnson" age={21} course="Physics" />
      </div>
    );
  }
}

export default App;

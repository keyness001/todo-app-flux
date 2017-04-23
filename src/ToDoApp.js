import React, { Component } from 'react';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

class ToDoApp extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h2>My To Do List</h2>
          <AddItem />
        </div>
        <ListItem />
      </div>
    );
  }
}

export default ToDoApp;

import React, {Component} from 'react';
import TodoActions from '../actions/TodoActions';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {value : ''};
  }

  handleSubmit = (e) => {
    e.preventDefault();
    TodoActions.addItem(this.state.value);
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  render(){
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <input name="add-item" value={this.state.value} onChange={this.handleChange} placeholder="Title..."/>
        <button type="submit" name="add" className="addBtn" >Add</button>
      </form>
    );
  }
}

export default AddItem;

import React, {Component} from "react";
import TodoActions from '../actions/TodoActions';

class Item extends Component {
  constructor(props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove = (id) => {
    TodoActions.removeItem(id);
  }

  render(){
    const {name, id} = this.props;
    return(
      <li onClick={(e) => this.handleRemove(id)}>{name}<span className="close">×</span></li>
    );
  }
}

export default Item;

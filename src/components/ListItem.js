import React, {Component} from 'react';
import TodoActions from '../actions/TodoActions';
import TodoStore from '../stores/TodoStore'
import Item from './Item';

function getAppState() {
  return {
    items: TodoStore.getItems(),
    isFirst: TodoStore.getIsFirst()
  };
}

class ListItem extends Component {
  constructor(props){
    super(props);
    this._onChange = this._onChange.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.state = getAppState();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange);
    TodoActions.getItems();
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(getAppState());
  }

  renderItem() {
    return(
      this.state.items.map((text, idx) => {
        return <Item key={idx} name={text} id={idx}/>;
      }, this)
    );
  }

  render(){
    return(
      Object.keys(this.state.items).length === 0 && this.state.isFirst ? <h3>Loading...</h3> : <ul>{this.renderItem()}</ul>
    )
  }
}

export default ListItem

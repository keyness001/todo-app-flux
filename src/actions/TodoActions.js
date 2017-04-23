import TodoDispatcher from '../dispatcher/TodoDispatcher';
import TodoConstant from '../constants/TodoConstants';

const TodoActions = {
  getItems: () => {
    TodoDispatcher.handleAction({
      actionType: TodoConstant.GET_ITEMS,
      data: {items: [
        'aaaa',
        'bbbb',
        'cccc'
      ]}
    });
  },
  removeItem: (id) => {
    TodoDispatcher.handleAction({
      actionType: TodoConstant.REMOVE_ITEM,
      data: {id: id}
    });
  },
  addItem: (value) => {
    TodoDispatcher.handleAction({
      actionType: TodoConstant.ADD_ITEM,
      data: {item: value}
    });
  }
}

module.exports = TodoActions;

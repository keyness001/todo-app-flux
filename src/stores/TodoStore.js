import TodoDispatcher from '../dispatcher/TodoDispatcher';
import TodoConstant from '../constants/TodoConstants';
const EventEmitter = require('events').EventEmitter;
const assign = require('object-assign');

let _items = {};
let isFirst = true;

const loadItems = (data) => {
  [..._items] = data.items;
}

const removeItem = (data) => {
  _items = [..._items].filter((item, idx) => {
    if(idx !== data.id) return item;
  });
  if(isFirst) isFirst = false;
}

const addItem = (data) => {
  _items = [..._items, data.item];
}

const TodoStore = assign({}, EventEmitter.prototype, {

  getItems: () => {
    return _items;
  },

  getIsFirst: () => {
    return isFirst;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

TodoDispatcher.register((payload) => {
  let action = payload.action;
  switch(action.actionType) {
    case TodoConstant.GET_ITEMS:
      loadItems(action.data);
      break;
    case TodoConstant.REMOVE_ITEM:
      removeItem(action.data);
      break;
    case TodoConstant.ADD_ITEM:
      addItem(action.data);
      break;
    default:
      return true;
  }

  TodoStore.emitChange();

  return true;

});

module.exports = TodoStore;

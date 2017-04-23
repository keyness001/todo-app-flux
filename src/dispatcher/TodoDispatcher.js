const Dispatcher = require('flux').Dispatcher;
const assign = require('object-assign');

const TodoDispatcher = assign(new Dispatcher(), {
  handleAction(action) {
    this.dispatch({
      action: action
    });
  }
});

module.exports = TodoDispatcher;

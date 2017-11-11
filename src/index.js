import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { List } from 'immutable'
import { StateRecord, TodoRecord } from './consts'
import reducer from './reducer'
import App from './components/App'

let initialState = new StateRecord()
if (typeof Storage !== 'undefined') {
  const oldState = JSON.parse(localStorage.state)
  if (oldState) {
    const oldStateTodos = oldState.todos.map(todo => new TodoRecord(todo))
    initialState = new StateRecord({
      filter: oldState.filter,
      deadlinePicker: oldState.deadlinePicker,
      todos: List(oldStateTodos),
    })
  }
}
const store = createStore(reducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

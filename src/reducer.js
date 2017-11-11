import { TYPE, TodoRecord } from './consts'
import moment from 'moment'

function reducer(state, action) {
  let newState

  switch (action.type) {
    case TYPE.ADD_TODO:
      newState = state.update('todos', todos =>
        todos.insert(0, new TodoRecord({ id: moment() })),
      )
      break

    case TYPE.REMOVE_TODO:
      newState = state.update('todos', todos => todos.remove(action.payload))
      break

    case TYPE.UPDATE_TODO:
      const { index, field, value } = action.payload
      newState = state.updateIn(['todos', index], todo =>
        todo.set(field, value),
      )
      break

    case TYPE.UPDATE_FILTER:
      newState = state.set('filter', action.payload)
      break

    case TYPE.UPDATE_DEADLINE_PICKER:
      newState = state.set('deadlinePicker', action.payload)
      break

    default:
      newState = state
      break
  }

  if (typeof Storage !== 'undefined') {
    localStorage.setItem('state', JSON.stringify(newState))
  }

  return newState
}

export default reducer
